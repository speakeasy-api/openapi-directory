"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListVpcsResponse = exports.ListVpcsRequest = exports.ListVpcs401ApplicationJson = exports.ListVpcs200ApplicationJson = exports.ListVpcs200ApplicationJsonVpcs = exports.ListVpcs200ApplicationJsonMeta = exports.ListVpcs200ApplicationJsonLinks = exports.ListVpcs200ApplicationJsonLinksPages2 = exports.ListVpcs200ApplicationJsonLinksPages1 = exports.ListVpcsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListVpcsQueryParams = /** @class */ (function (_super) {
    __extends(ListVpcsQueryParams, _super);
    function ListVpcsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ListVpcsQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ListVpcsQueryParams.prototype, "perPage", void 0);
    return ListVpcsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListVpcsQueryParams = ListVpcsQueryParams;
var ListVpcs200ApplicationJsonLinksPages1 = /** @class */ (function (_super) {
    __extends(ListVpcs200ApplicationJsonLinksPages1, _super);
    function ListVpcs200ApplicationJsonLinksPages1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", String)
    ], ListVpcs200ApplicationJsonLinksPages1.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], ListVpcs200ApplicationJsonLinksPages1.prototype, "next", void 0);
    return ListVpcs200ApplicationJsonLinksPages1;
}(utils_1.SpeakeasyBase));
exports.ListVpcs200ApplicationJsonLinksPages1 = ListVpcs200ApplicationJsonLinksPages1;
var ListVpcs200ApplicationJsonLinksPages2 = /** @class */ (function (_super) {
    __extends(ListVpcs200ApplicationJsonLinksPages2, _super);
    function ListVpcs200ApplicationJsonLinksPages2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", String)
    ], ListVpcs200ApplicationJsonLinksPages2.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", String)
    ], ListVpcs200ApplicationJsonLinksPages2.prototype, "prev", void 0);
    return ListVpcs200ApplicationJsonLinksPages2;
}(utils_1.SpeakeasyBase));
exports.ListVpcs200ApplicationJsonLinksPages2 = ListVpcs200ApplicationJsonLinksPages2;
var ListVpcs200ApplicationJsonLinks = /** @class */ (function (_super) {
    __extends(ListVpcs200ApplicationJsonLinks, _super);
    function ListVpcs200ApplicationJsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pages" }),
        __metadata("design:type", Object)
    ], ListVpcs200ApplicationJsonLinks.prototype, "pages", void 0);
    return ListVpcs200ApplicationJsonLinks;
}(utils_1.SpeakeasyBase));
exports.ListVpcs200ApplicationJsonLinks = ListVpcs200ApplicationJsonLinks;
// ListVpcs200ApplicationJsonMeta
/**
 * Information about the response itself.
**/
var ListVpcs200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(ListVpcs200ApplicationJsonMeta, _super);
    function ListVpcs200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ListVpcs200ApplicationJsonMeta.prototype, "total", void 0);
    return ListVpcs200ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.ListVpcs200ApplicationJsonMeta = ListVpcs200ApplicationJsonMeta;
var ListVpcs200ApplicationJsonVpcs = /** @class */ (function (_super) {
    __extends(ListVpcs200ApplicationJsonVpcs, _super);
    function ListVpcs200ApplicationJsonVpcs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], ListVpcs200ApplicationJsonVpcs.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=default" }),
        __metadata("design:type", Boolean)
    ], ListVpcs200ApplicationJsonVpcs.prototype, "default", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ListVpcs200ApplicationJsonVpcs.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListVpcs200ApplicationJsonVpcs.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_range" }),
        __metadata("design:type", String)
    ], ListVpcs200ApplicationJsonVpcs.prototype, "ipRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListVpcs200ApplicationJsonVpcs.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], ListVpcs200ApplicationJsonVpcs.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=urn" }),
        __metadata("design:type", String)
    ], ListVpcs200ApplicationJsonVpcs.prototype, "urn", void 0);
    return ListVpcs200ApplicationJsonVpcs;
}(utils_1.SpeakeasyBase));
exports.ListVpcs200ApplicationJsonVpcs = ListVpcs200ApplicationJsonVpcs;
var ListVpcs200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListVpcs200ApplicationJson, _super);
    function ListVpcs200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", ListVpcs200ApplicationJsonLinks)
    ], ListVpcs200ApplicationJson.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListVpcs200ApplicationJsonMeta)
    ], ListVpcs200ApplicationJson.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vpcs", elemType: ListVpcs200ApplicationJsonVpcs }),
        __metadata("design:type", Array)
    ], ListVpcs200ApplicationJson.prototype, "vpcs", void 0);
    return ListVpcs200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListVpcs200ApplicationJson = ListVpcs200ApplicationJson;
var ListVpcs401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListVpcs401ApplicationJson, _super);
    function ListVpcs401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListVpcs401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListVpcs401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], ListVpcs401ApplicationJson.prototype, "requestId", void 0);
    return ListVpcs401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListVpcs401ApplicationJson = ListVpcs401ApplicationJson;
var ListVpcsRequest = /** @class */ (function (_super) {
    __extends(ListVpcsRequest, _super);
    function ListVpcsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListVpcsQueryParams)
    ], ListVpcsRequest.prototype, "queryParams", void 0);
    return ListVpcsRequest;
}(utils_1.SpeakeasyBase));
exports.ListVpcsRequest = ListVpcsRequest;
var ListVpcsResponse = /** @class */ (function (_super) {
    __extends(ListVpcsResponse, _super);
    function ListVpcsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListVpcsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListVpcsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListVpcsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListVpcs200ApplicationJson)
    ], ListVpcsResponse.prototype, "listVpcs200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListVpcs401ApplicationJson)
    ], ListVpcsResponse.prototype, "listVpcs401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], ListVpcsResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return ListVpcsResponse;
}(utils_1.SpeakeasyBase));
exports.ListVpcsResponse = ListVpcsResponse;
