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
exports.ListRepositoryTagsResponse = exports.ListRepositoryTagsRequest = exports.ListRepositoryTags401ApplicationJson = exports.ListRepositoryTags200ApplicationJson = exports.ListRepositoryTags200ApplicationJsonMeta = exports.ListRepositoryTags200ApplicationJsonLinks = exports.ListRepositoryTags200ApplicationJsonLinksPages2 = exports.ListRepositoryTags200ApplicationJsonLinksPages1 = exports.ListRepositoryTagsQueryParams = exports.ListRepositoryTagsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListRepositoryTagsPathParams = /** @class */ (function (_super) {
    __extends(ListRepositoryTagsPathParams, _super);
    function ListRepositoryTagsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=registry_name" }),
        __metadata("design:type", String)
    ], ListRepositoryTagsPathParams.prototype, "registryName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=repository_name" }),
        __metadata("design:type", String)
    ], ListRepositoryTagsPathParams.prototype, "repositoryName", void 0);
    return ListRepositoryTagsPathParams;
}(utils_1.SpeakeasyBase));
exports.ListRepositoryTagsPathParams = ListRepositoryTagsPathParams;
var ListRepositoryTagsQueryParams = /** @class */ (function (_super) {
    __extends(ListRepositoryTagsQueryParams, _super);
    function ListRepositoryTagsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ListRepositoryTagsQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ListRepositoryTagsQueryParams.prototype, "perPage", void 0);
    return ListRepositoryTagsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListRepositoryTagsQueryParams = ListRepositoryTagsQueryParams;
var ListRepositoryTags200ApplicationJsonLinksPages1 = /** @class */ (function (_super) {
    __extends(ListRepositoryTags200ApplicationJsonLinksPages1, _super);
    function ListRepositoryTags200ApplicationJsonLinksPages1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", String)
    ], ListRepositoryTags200ApplicationJsonLinksPages1.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], ListRepositoryTags200ApplicationJsonLinksPages1.prototype, "next", void 0);
    return ListRepositoryTags200ApplicationJsonLinksPages1;
}(utils_1.SpeakeasyBase));
exports.ListRepositoryTags200ApplicationJsonLinksPages1 = ListRepositoryTags200ApplicationJsonLinksPages1;
var ListRepositoryTags200ApplicationJsonLinksPages2 = /** @class */ (function (_super) {
    __extends(ListRepositoryTags200ApplicationJsonLinksPages2, _super);
    function ListRepositoryTags200ApplicationJsonLinksPages2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", String)
    ], ListRepositoryTags200ApplicationJsonLinksPages2.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", String)
    ], ListRepositoryTags200ApplicationJsonLinksPages2.prototype, "prev", void 0);
    return ListRepositoryTags200ApplicationJsonLinksPages2;
}(utils_1.SpeakeasyBase));
exports.ListRepositoryTags200ApplicationJsonLinksPages2 = ListRepositoryTags200ApplicationJsonLinksPages2;
var ListRepositoryTags200ApplicationJsonLinks = /** @class */ (function (_super) {
    __extends(ListRepositoryTags200ApplicationJsonLinks, _super);
    function ListRepositoryTags200ApplicationJsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pages" }),
        __metadata("design:type", Object)
    ], ListRepositoryTags200ApplicationJsonLinks.prototype, "pages", void 0);
    return ListRepositoryTags200ApplicationJsonLinks;
}(utils_1.SpeakeasyBase));
exports.ListRepositoryTags200ApplicationJsonLinks = ListRepositoryTags200ApplicationJsonLinks;
// ListRepositoryTags200ApplicationJsonMeta
/**
 * Information about the response itself.
**/
var ListRepositoryTags200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(ListRepositoryTags200ApplicationJsonMeta, _super);
    function ListRepositoryTags200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ListRepositoryTags200ApplicationJsonMeta.prototype, "total", void 0);
    return ListRepositoryTags200ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.ListRepositoryTags200ApplicationJsonMeta = ListRepositoryTags200ApplicationJsonMeta;
var ListRepositoryTags200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListRepositoryTags200ApplicationJson, _super);
    function ListRepositoryTags200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", ListRepositoryTags200ApplicationJsonLinks)
    ], ListRepositoryTags200ApplicationJson.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListRepositoryTags200ApplicationJsonMeta)
    ], ListRepositoryTags200ApplicationJson.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags", elemType: shared.Onev21registry1Percent7BregistryNamePercent7DGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesRepositoriesItemsPropertiesLatestTag }),
        __metadata("design:type", Array)
    ], ListRepositoryTags200ApplicationJson.prototype, "tags", void 0);
    return ListRepositoryTags200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListRepositoryTags200ApplicationJson = ListRepositoryTags200ApplicationJson;
var ListRepositoryTags401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListRepositoryTags401ApplicationJson, _super);
    function ListRepositoryTags401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListRepositoryTags401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListRepositoryTags401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], ListRepositoryTags401ApplicationJson.prototype, "requestId", void 0);
    return ListRepositoryTags401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListRepositoryTags401ApplicationJson = ListRepositoryTags401ApplicationJson;
var ListRepositoryTagsRequest = /** @class */ (function (_super) {
    __extends(ListRepositoryTagsRequest, _super);
    function ListRepositoryTagsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListRepositoryTagsPathParams)
    ], ListRepositoryTagsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListRepositoryTagsQueryParams)
    ], ListRepositoryTagsRequest.prototype, "queryParams", void 0);
    return ListRepositoryTagsRequest;
}(utils_1.SpeakeasyBase));
exports.ListRepositoryTagsRequest = ListRepositoryTagsRequest;
var ListRepositoryTagsResponse = /** @class */ (function (_super) {
    __extends(ListRepositoryTagsResponse, _super);
    function ListRepositoryTagsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListRepositoryTagsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListRepositoryTagsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListRepositoryTagsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListRepositoryTags200ApplicationJson)
    ], ListRepositoryTagsResponse.prototype, "listRepositoryTags200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListRepositoryTags401ApplicationJson)
    ], ListRepositoryTagsResponse.prototype, "listRepositoryTags401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], ListRepositoryTagsResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return ListRepositoryTagsResponse;
}(utils_1.SpeakeasyBase));
exports.ListRepositoryTagsResponse = ListRepositoryTagsResponse;
