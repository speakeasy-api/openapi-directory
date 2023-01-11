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
exports.ListCdnEndpointsResponse = exports.ListCdnEndpointsRequest = exports.ListCdnEndpoints401ApplicationJson = exports.ListCdnEndpoints200ApplicationJson = exports.ListCdnEndpoints200ApplicationJsonMeta = exports.ListCdnEndpoints200ApplicationJsonLinks = exports.ListCdnEndpoints200ApplicationJsonLinksPages2 = exports.ListCdnEndpoints200ApplicationJsonLinksPages1 = exports.ListCdnEndpoints200ApplicationJsonEndpoints = exports.ListCdnEndpointsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListCdnEndpointsQueryParams = /** @class */ (function (_super) {
    __extends(ListCdnEndpointsQueryParams, _super);
    function ListCdnEndpointsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ListCdnEndpointsQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ListCdnEndpointsQueryParams.prototype, "perPage", void 0);
    return ListCdnEndpointsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListCdnEndpointsQueryParams = ListCdnEndpointsQueryParams;
var ListCdnEndpoints200ApplicationJsonEndpoints = /** @class */ (function (_super) {
    __extends(ListCdnEndpoints200ApplicationJsonEndpoints, _super);
    function ListCdnEndpoints200ApplicationJsonEndpoints() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificate_id" }),
        __metadata("design:type", String)
    ], ListCdnEndpoints200ApplicationJsonEndpoints.prototype, "certificateId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], ListCdnEndpoints200ApplicationJsonEndpoints.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_domain" }),
        __metadata("design:type", String)
    ], ListCdnEndpoints200ApplicationJsonEndpoints.prototype, "customDomain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endpoint" }),
        __metadata("design:type", String)
    ], ListCdnEndpoints200ApplicationJsonEndpoints.prototype, "endpoint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListCdnEndpoints200ApplicationJsonEndpoints.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=origin" }),
        __metadata("design:type", String)
    ], ListCdnEndpoints200ApplicationJsonEndpoints.prototype, "origin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ttl" }),
        __metadata("design:type", Number)
    ], ListCdnEndpoints200ApplicationJsonEndpoints.prototype, "ttl", void 0);
    return ListCdnEndpoints200ApplicationJsonEndpoints;
}(utils_1.SpeakeasyBase));
exports.ListCdnEndpoints200ApplicationJsonEndpoints = ListCdnEndpoints200ApplicationJsonEndpoints;
var ListCdnEndpoints200ApplicationJsonLinksPages1 = /** @class */ (function (_super) {
    __extends(ListCdnEndpoints200ApplicationJsonLinksPages1, _super);
    function ListCdnEndpoints200ApplicationJsonLinksPages1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", String)
    ], ListCdnEndpoints200ApplicationJsonLinksPages1.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], ListCdnEndpoints200ApplicationJsonLinksPages1.prototype, "next", void 0);
    return ListCdnEndpoints200ApplicationJsonLinksPages1;
}(utils_1.SpeakeasyBase));
exports.ListCdnEndpoints200ApplicationJsonLinksPages1 = ListCdnEndpoints200ApplicationJsonLinksPages1;
var ListCdnEndpoints200ApplicationJsonLinksPages2 = /** @class */ (function (_super) {
    __extends(ListCdnEndpoints200ApplicationJsonLinksPages2, _super);
    function ListCdnEndpoints200ApplicationJsonLinksPages2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", String)
    ], ListCdnEndpoints200ApplicationJsonLinksPages2.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", String)
    ], ListCdnEndpoints200ApplicationJsonLinksPages2.prototype, "prev", void 0);
    return ListCdnEndpoints200ApplicationJsonLinksPages2;
}(utils_1.SpeakeasyBase));
exports.ListCdnEndpoints200ApplicationJsonLinksPages2 = ListCdnEndpoints200ApplicationJsonLinksPages2;
var ListCdnEndpoints200ApplicationJsonLinks = /** @class */ (function (_super) {
    __extends(ListCdnEndpoints200ApplicationJsonLinks, _super);
    function ListCdnEndpoints200ApplicationJsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pages" }),
        __metadata("design:type", Object)
    ], ListCdnEndpoints200ApplicationJsonLinks.prototype, "pages", void 0);
    return ListCdnEndpoints200ApplicationJsonLinks;
}(utils_1.SpeakeasyBase));
exports.ListCdnEndpoints200ApplicationJsonLinks = ListCdnEndpoints200ApplicationJsonLinks;
// ListCdnEndpoints200ApplicationJsonMeta
/**
 * Information about the response itself.
**/
var ListCdnEndpoints200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(ListCdnEndpoints200ApplicationJsonMeta, _super);
    function ListCdnEndpoints200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ListCdnEndpoints200ApplicationJsonMeta.prototype, "total", void 0);
    return ListCdnEndpoints200ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.ListCdnEndpoints200ApplicationJsonMeta = ListCdnEndpoints200ApplicationJsonMeta;
var ListCdnEndpoints200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListCdnEndpoints200ApplicationJson, _super);
    function ListCdnEndpoints200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endpoints", elemType: ListCdnEndpoints200ApplicationJsonEndpoints }),
        __metadata("design:type", Array)
    ], ListCdnEndpoints200ApplicationJson.prototype, "endpoints", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", ListCdnEndpoints200ApplicationJsonLinks)
    ], ListCdnEndpoints200ApplicationJson.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListCdnEndpoints200ApplicationJsonMeta)
    ], ListCdnEndpoints200ApplicationJson.prototype, "meta", void 0);
    return ListCdnEndpoints200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListCdnEndpoints200ApplicationJson = ListCdnEndpoints200ApplicationJson;
var ListCdnEndpoints401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListCdnEndpoints401ApplicationJson, _super);
    function ListCdnEndpoints401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListCdnEndpoints401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListCdnEndpoints401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], ListCdnEndpoints401ApplicationJson.prototype, "requestId", void 0);
    return ListCdnEndpoints401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListCdnEndpoints401ApplicationJson = ListCdnEndpoints401ApplicationJson;
var ListCdnEndpointsRequest = /** @class */ (function (_super) {
    __extends(ListCdnEndpointsRequest, _super);
    function ListCdnEndpointsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListCdnEndpointsQueryParams)
    ], ListCdnEndpointsRequest.prototype, "queryParams", void 0);
    return ListCdnEndpointsRequest;
}(utils_1.SpeakeasyBase));
exports.ListCdnEndpointsRequest = ListCdnEndpointsRequest;
var ListCdnEndpointsResponse = /** @class */ (function (_super) {
    __extends(ListCdnEndpointsResponse, _super);
    function ListCdnEndpointsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListCdnEndpointsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListCdnEndpointsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListCdnEndpointsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListCdnEndpoints200ApplicationJson)
    ], ListCdnEndpointsResponse.prototype, "listCdnEndpoints200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListCdnEndpoints401ApplicationJson)
    ], ListCdnEndpointsResponse.prototype, "listCdnEndpoints401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], ListCdnEndpointsResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return ListCdnEndpointsResponse;
}(utils_1.SpeakeasyBase));
exports.ListCdnEndpointsResponse = ListCdnEndpointsResponse;
