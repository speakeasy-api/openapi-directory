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
exports.GetImagesListResponse = exports.GetImagesListRequest = exports.GetImagesList401ApplicationJson = exports.GetImagesList200ApplicationJson = exports.GetImagesList200ApplicationJsonMeta = exports.GetImagesList200ApplicationJsonLinks = exports.GetImagesList200ApplicationJsonLinksPages2 = exports.GetImagesList200ApplicationJsonLinksPages1 = exports.GetImagesListQueryParams = exports.GetImagesListTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetImagesListTypeEnum;
(function (GetImagesListTypeEnum) {
    GetImagesListTypeEnum["Application"] = "application";
    GetImagesListTypeEnum["Distribution"] = "distribution";
})(GetImagesListTypeEnum = exports.GetImagesListTypeEnum || (exports.GetImagesListTypeEnum = {}));
var GetImagesListQueryParams = /** @class */ (function (_super) {
    __extends(GetImagesListQueryParams, _super);
    function GetImagesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetImagesListQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetImagesListQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=private" }),
        __metadata("design:type", Boolean)
    ], GetImagesListQueryParams.prototype, "private", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=tag_name" }),
        __metadata("design:type", String)
    ], GetImagesListQueryParams.prototype, "tagName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetImagesListQueryParams.prototype, "type", void 0);
    return GetImagesListQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetImagesListQueryParams = GetImagesListQueryParams;
var GetImagesList200ApplicationJsonLinksPages1 = /** @class */ (function (_super) {
    __extends(GetImagesList200ApplicationJsonLinksPages1, _super);
    function GetImagesList200ApplicationJsonLinksPages1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", String)
    ], GetImagesList200ApplicationJsonLinksPages1.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], GetImagesList200ApplicationJsonLinksPages1.prototype, "next", void 0);
    return GetImagesList200ApplicationJsonLinksPages1;
}(utils_1.SpeakeasyBase));
exports.GetImagesList200ApplicationJsonLinksPages1 = GetImagesList200ApplicationJsonLinksPages1;
var GetImagesList200ApplicationJsonLinksPages2 = /** @class */ (function (_super) {
    __extends(GetImagesList200ApplicationJsonLinksPages2, _super);
    function GetImagesList200ApplicationJsonLinksPages2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", String)
    ], GetImagesList200ApplicationJsonLinksPages2.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", String)
    ], GetImagesList200ApplicationJsonLinksPages2.prototype, "prev", void 0);
    return GetImagesList200ApplicationJsonLinksPages2;
}(utils_1.SpeakeasyBase));
exports.GetImagesList200ApplicationJsonLinksPages2 = GetImagesList200ApplicationJsonLinksPages2;
var GetImagesList200ApplicationJsonLinks = /** @class */ (function (_super) {
    __extends(GetImagesList200ApplicationJsonLinks, _super);
    function GetImagesList200ApplicationJsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pages" }),
        __metadata("design:type", Object)
    ], GetImagesList200ApplicationJsonLinks.prototype, "pages", void 0);
    return GetImagesList200ApplicationJsonLinks;
}(utils_1.SpeakeasyBase));
exports.GetImagesList200ApplicationJsonLinks = GetImagesList200ApplicationJsonLinks;
// GetImagesList200ApplicationJsonMeta
/**
 * Information about the response itself.
**/
var GetImagesList200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(GetImagesList200ApplicationJsonMeta, _super);
    function GetImagesList200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GetImagesList200ApplicationJsonMeta.prototype, "total", void 0);
    return GetImagesList200ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.GetImagesList200ApplicationJsonMeta = GetImagesList200ApplicationJsonMeta;
var GetImagesList200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetImagesList200ApplicationJson, _super);
    function GetImagesList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=images", elemType: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImage }),
        __metadata("design:type", Array)
    ], GetImagesList200ApplicationJson.prototype, "images", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", GetImagesList200ApplicationJsonLinks)
    ], GetImagesList200ApplicationJson.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", GetImagesList200ApplicationJsonMeta)
    ], GetImagesList200ApplicationJson.prototype, "meta", void 0);
    return GetImagesList200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetImagesList200ApplicationJson = GetImagesList200ApplicationJson;
var GetImagesList401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetImagesList401ApplicationJson, _super);
    function GetImagesList401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetImagesList401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetImagesList401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], GetImagesList401ApplicationJson.prototype, "requestId", void 0);
    return GetImagesList401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetImagesList401ApplicationJson = GetImagesList401ApplicationJson;
var GetImagesListRequest = /** @class */ (function (_super) {
    __extends(GetImagesListRequest, _super);
    function GetImagesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetImagesListQueryParams)
    ], GetImagesListRequest.prototype, "queryParams", void 0);
    return GetImagesListRequest;
}(utils_1.SpeakeasyBase));
exports.GetImagesListRequest = GetImagesListRequest;
var GetImagesListResponse = /** @class */ (function (_super) {
    __extends(GetImagesListResponse, _super);
    function GetImagesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetImagesListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetImagesListResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetImagesListResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetImagesList200ApplicationJson)
    ], GetImagesListResponse.prototype, "getImagesList200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetImagesList401ApplicationJson)
    ], GetImagesListResponse.prototype, "getImagesList401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], GetImagesListResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return GetImagesListResponse;
}(utils_1.SpeakeasyBase));
exports.GetImagesListResponse = GetImagesListResponse;
