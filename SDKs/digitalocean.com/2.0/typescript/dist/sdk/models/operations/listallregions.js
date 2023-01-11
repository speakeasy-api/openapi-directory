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
exports.ListAllRegionsResponse = exports.ListAllRegionsRequest = exports.ListAllRegions401ApplicationJson = exports.ListAllRegions200ApplicationJson = exports.ListAllRegions200ApplicationJsonMeta = exports.ListAllRegions200ApplicationJsonLinks = exports.ListAllRegions200ApplicationJsonLinksPages2 = exports.ListAllRegions200ApplicationJsonLinksPages1 = exports.ListAllRegionsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListAllRegionsQueryParams = /** @class */ (function (_super) {
    __extends(ListAllRegionsQueryParams, _super);
    function ListAllRegionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ListAllRegionsQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ListAllRegionsQueryParams.prototype, "perPage", void 0);
    return ListAllRegionsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListAllRegionsQueryParams = ListAllRegionsQueryParams;
var ListAllRegions200ApplicationJsonLinksPages1 = /** @class */ (function (_super) {
    __extends(ListAllRegions200ApplicationJsonLinksPages1, _super);
    function ListAllRegions200ApplicationJsonLinksPages1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", String)
    ], ListAllRegions200ApplicationJsonLinksPages1.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], ListAllRegions200ApplicationJsonLinksPages1.prototype, "next", void 0);
    return ListAllRegions200ApplicationJsonLinksPages1;
}(utils_1.SpeakeasyBase));
exports.ListAllRegions200ApplicationJsonLinksPages1 = ListAllRegions200ApplicationJsonLinksPages1;
var ListAllRegions200ApplicationJsonLinksPages2 = /** @class */ (function (_super) {
    __extends(ListAllRegions200ApplicationJsonLinksPages2, _super);
    function ListAllRegions200ApplicationJsonLinksPages2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", String)
    ], ListAllRegions200ApplicationJsonLinksPages2.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", String)
    ], ListAllRegions200ApplicationJsonLinksPages2.prototype, "prev", void 0);
    return ListAllRegions200ApplicationJsonLinksPages2;
}(utils_1.SpeakeasyBase));
exports.ListAllRegions200ApplicationJsonLinksPages2 = ListAllRegions200ApplicationJsonLinksPages2;
var ListAllRegions200ApplicationJsonLinks = /** @class */ (function (_super) {
    __extends(ListAllRegions200ApplicationJsonLinks, _super);
    function ListAllRegions200ApplicationJsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pages" }),
        __metadata("design:type", Object)
    ], ListAllRegions200ApplicationJsonLinks.prototype, "pages", void 0);
    return ListAllRegions200ApplicationJsonLinks;
}(utils_1.SpeakeasyBase));
exports.ListAllRegions200ApplicationJsonLinks = ListAllRegions200ApplicationJsonLinks;
// ListAllRegions200ApplicationJsonMeta
/**
 * Information about the response itself.
**/
var ListAllRegions200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(ListAllRegions200ApplicationJsonMeta, _super);
    function ListAllRegions200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ListAllRegions200ApplicationJsonMeta.prototype, "total", void 0);
    return ListAllRegions200ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.ListAllRegions200ApplicationJsonMeta = ListAllRegions200ApplicationJsonMeta;
var ListAllRegions200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAllRegions200ApplicationJson, _super);
    function ListAllRegions200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", ListAllRegions200ApplicationJsonLinks)
    ], ListAllRegions200ApplicationJson.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListAllRegions200ApplicationJsonMeta)
    ], ListAllRegions200ApplicationJson.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=regions", elemType: shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsPropertiesRegion }),
        __metadata("design:type", Array)
    ], ListAllRegions200ApplicationJson.prototype, "regions", void 0);
    return ListAllRegions200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAllRegions200ApplicationJson = ListAllRegions200ApplicationJson;
var ListAllRegions401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAllRegions401ApplicationJson, _super);
    function ListAllRegions401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListAllRegions401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListAllRegions401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], ListAllRegions401ApplicationJson.prototype, "requestId", void 0);
    return ListAllRegions401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAllRegions401ApplicationJson = ListAllRegions401ApplicationJson;
var ListAllRegionsRequest = /** @class */ (function (_super) {
    __extends(ListAllRegionsRequest, _super);
    function ListAllRegionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllRegionsQueryParams)
    ], ListAllRegionsRequest.prototype, "queryParams", void 0);
    return ListAllRegionsRequest;
}(utils_1.SpeakeasyBase));
exports.ListAllRegionsRequest = ListAllRegionsRequest;
var ListAllRegionsResponse = /** @class */ (function (_super) {
    __extends(ListAllRegionsResponse, _super);
    function ListAllRegionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListAllRegionsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListAllRegionsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListAllRegionsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllRegions200ApplicationJson)
    ], ListAllRegionsResponse.prototype, "listAllRegions200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllRegions401ApplicationJson)
    ], ListAllRegionsResponse.prototype, "listAllRegions401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], ListAllRegionsResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return ListAllRegionsResponse;
}(utils_1.SpeakeasyBase));
exports.ListAllRegionsResponse = ListAllRegionsResponse;
