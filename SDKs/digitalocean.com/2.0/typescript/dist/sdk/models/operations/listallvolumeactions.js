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
exports.ListAllVolumeActionsResponse = exports.ListAllVolumeActionsRequest = exports.ListAllVolumeActions401ApplicationJson = exports.ListAllVolumeActions200ApplicationJson = exports.ListAllVolumeActions200ApplicationJsonMeta = exports.ListAllVolumeActions200ApplicationJsonLinks = exports.ListAllVolumeActions200ApplicationJsonLinksPages2 = exports.ListAllVolumeActions200ApplicationJsonLinksPages1 = exports.ListAllVolumeActionsQueryParams = exports.ListAllVolumeActionsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListAllVolumeActionsPathParams = /** @class */ (function (_super) {
    __extends(ListAllVolumeActionsPathParams, _super);
    function ListAllVolumeActionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=volume_id" }),
        __metadata("design:type", String)
    ], ListAllVolumeActionsPathParams.prototype, "volumeId", void 0);
    return ListAllVolumeActionsPathParams;
}(utils_1.SpeakeasyBase));
exports.ListAllVolumeActionsPathParams = ListAllVolumeActionsPathParams;
var ListAllVolumeActionsQueryParams = /** @class */ (function (_super) {
    __extends(ListAllVolumeActionsQueryParams, _super);
    function ListAllVolumeActionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ListAllVolumeActionsQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ListAllVolumeActionsQueryParams.prototype, "perPage", void 0);
    return ListAllVolumeActionsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListAllVolumeActionsQueryParams = ListAllVolumeActionsQueryParams;
var ListAllVolumeActions200ApplicationJsonLinksPages1 = /** @class */ (function (_super) {
    __extends(ListAllVolumeActions200ApplicationJsonLinksPages1, _super);
    function ListAllVolumeActions200ApplicationJsonLinksPages1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", String)
    ], ListAllVolumeActions200ApplicationJsonLinksPages1.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], ListAllVolumeActions200ApplicationJsonLinksPages1.prototype, "next", void 0);
    return ListAllVolumeActions200ApplicationJsonLinksPages1;
}(utils_1.SpeakeasyBase));
exports.ListAllVolumeActions200ApplicationJsonLinksPages1 = ListAllVolumeActions200ApplicationJsonLinksPages1;
var ListAllVolumeActions200ApplicationJsonLinksPages2 = /** @class */ (function (_super) {
    __extends(ListAllVolumeActions200ApplicationJsonLinksPages2, _super);
    function ListAllVolumeActions200ApplicationJsonLinksPages2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", String)
    ], ListAllVolumeActions200ApplicationJsonLinksPages2.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", String)
    ], ListAllVolumeActions200ApplicationJsonLinksPages2.prototype, "prev", void 0);
    return ListAllVolumeActions200ApplicationJsonLinksPages2;
}(utils_1.SpeakeasyBase));
exports.ListAllVolumeActions200ApplicationJsonLinksPages2 = ListAllVolumeActions200ApplicationJsonLinksPages2;
var ListAllVolumeActions200ApplicationJsonLinks = /** @class */ (function (_super) {
    __extends(ListAllVolumeActions200ApplicationJsonLinks, _super);
    function ListAllVolumeActions200ApplicationJsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pages" }),
        __metadata("design:type", Object)
    ], ListAllVolumeActions200ApplicationJsonLinks.prototype, "pages", void 0);
    return ListAllVolumeActions200ApplicationJsonLinks;
}(utils_1.SpeakeasyBase));
exports.ListAllVolumeActions200ApplicationJsonLinks = ListAllVolumeActions200ApplicationJsonLinks;
// ListAllVolumeActions200ApplicationJsonMeta
/**
 * Information about the response itself.
**/
var ListAllVolumeActions200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(ListAllVolumeActions200ApplicationJsonMeta, _super);
    function ListAllVolumeActions200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ListAllVolumeActions200ApplicationJsonMeta.prototype, "total", void 0);
    return ListAllVolumeActions200ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.ListAllVolumeActions200ApplicationJsonMeta = ListAllVolumeActions200ApplicationJsonMeta;
var ListAllVolumeActions200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAllVolumeActions200ApplicationJson, _super);
    function ListAllVolumeActions200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=actions", elemType: shared.Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesAction }),
        __metadata("design:type", Array)
    ], ListAllVolumeActions200ApplicationJson.prototype, "actions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", ListAllVolumeActions200ApplicationJsonLinks)
    ], ListAllVolumeActions200ApplicationJson.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListAllVolumeActions200ApplicationJsonMeta)
    ], ListAllVolumeActions200ApplicationJson.prototype, "meta", void 0);
    return ListAllVolumeActions200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAllVolumeActions200ApplicationJson = ListAllVolumeActions200ApplicationJson;
var ListAllVolumeActions401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAllVolumeActions401ApplicationJson, _super);
    function ListAllVolumeActions401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListAllVolumeActions401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListAllVolumeActions401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], ListAllVolumeActions401ApplicationJson.prototype, "requestId", void 0);
    return ListAllVolumeActions401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAllVolumeActions401ApplicationJson = ListAllVolumeActions401ApplicationJson;
var ListAllVolumeActionsRequest = /** @class */ (function (_super) {
    __extends(ListAllVolumeActionsRequest, _super);
    function ListAllVolumeActionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllVolumeActionsPathParams)
    ], ListAllVolumeActionsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllVolumeActionsQueryParams)
    ], ListAllVolumeActionsRequest.prototype, "queryParams", void 0);
    return ListAllVolumeActionsRequest;
}(utils_1.SpeakeasyBase));
exports.ListAllVolumeActionsRequest = ListAllVolumeActionsRequest;
var ListAllVolumeActionsResponse = /** @class */ (function (_super) {
    __extends(ListAllVolumeActionsResponse, _super);
    function ListAllVolumeActionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListAllVolumeActionsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListAllVolumeActionsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListAllVolumeActionsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllVolumeActions200ApplicationJson)
    ], ListAllVolumeActionsResponse.prototype, "listAllVolumeActions200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllVolumeActions401ApplicationJson)
    ], ListAllVolumeActionsResponse.prototype, "listAllVolumeActions401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], ListAllVolumeActionsResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return ListAllVolumeActionsResponse;
}(utils_1.SpeakeasyBase));
exports.ListAllVolumeActionsResponse = ListAllVolumeActionsResponse;
