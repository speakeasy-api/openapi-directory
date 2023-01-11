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
exports.ListAllVolumesResponse = exports.ListAllVolumesRequest = exports.ListAllVolumes401ApplicationJson = exports.ListAllVolumes200ApplicationJson = exports.ListAllVolumes200ApplicationJsonVolumes = exports.ListAllVolumes200ApplicationJsonVolumesRegion = exports.ListAllVolumes200ApplicationJsonMeta = exports.ListAllVolumes200ApplicationJsonLinks = exports.ListAllVolumes200ApplicationJsonLinksPages2 = exports.ListAllVolumes200ApplicationJsonLinksPages1 = exports.ListAllVolumesQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListAllVolumesQueryParams = /** @class */ (function (_super) {
    __extends(ListAllVolumesQueryParams, _super);
    function ListAllVolumesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], ListAllVolumesQueryParams.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ListAllVolumesQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ListAllVolumesQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=region" }),
        __metadata("design:type", String)
    ], ListAllVolumesQueryParams.prototype, "region", void 0);
    return ListAllVolumesQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListAllVolumesQueryParams = ListAllVolumesQueryParams;
var ListAllVolumes200ApplicationJsonLinksPages1 = /** @class */ (function (_super) {
    __extends(ListAllVolumes200ApplicationJsonLinksPages1, _super);
    function ListAllVolumes200ApplicationJsonLinksPages1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", String)
    ], ListAllVolumes200ApplicationJsonLinksPages1.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], ListAllVolumes200ApplicationJsonLinksPages1.prototype, "next", void 0);
    return ListAllVolumes200ApplicationJsonLinksPages1;
}(utils_1.SpeakeasyBase));
exports.ListAllVolumes200ApplicationJsonLinksPages1 = ListAllVolumes200ApplicationJsonLinksPages1;
var ListAllVolumes200ApplicationJsonLinksPages2 = /** @class */ (function (_super) {
    __extends(ListAllVolumes200ApplicationJsonLinksPages2, _super);
    function ListAllVolumes200ApplicationJsonLinksPages2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", String)
    ], ListAllVolumes200ApplicationJsonLinksPages2.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", String)
    ], ListAllVolumes200ApplicationJsonLinksPages2.prototype, "prev", void 0);
    return ListAllVolumes200ApplicationJsonLinksPages2;
}(utils_1.SpeakeasyBase));
exports.ListAllVolumes200ApplicationJsonLinksPages2 = ListAllVolumes200ApplicationJsonLinksPages2;
var ListAllVolumes200ApplicationJsonLinks = /** @class */ (function (_super) {
    __extends(ListAllVolumes200ApplicationJsonLinks, _super);
    function ListAllVolumes200ApplicationJsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pages" }),
        __metadata("design:type", Object)
    ], ListAllVolumes200ApplicationJsonLinks.prototype, "pages", void 0);
    return ListAllVolumes200ApplicationJsonLinks;
}(utils_1.SpeakeasyBase));
exports.ListAllVolumes200ApplicationJsonLinks = ListAllVolumes200ApplicationJsonLinks;
// ListAllVolumes200ApplicationJsonMeta
/**
 * Information about the response itself.
**/
var ListAllVolumes200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(ListAllVolumes200ApplicationJsonMeta, _super);
    function ListAllVolumes200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ListAllVolumes200ApplicationJsonMeta.prototype, "total", void 0);
    return ListAllVolumes200ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.ListAllVolumes200ApplicationJsonMeta = ListAllVolumes200ApplicationJsonMeta;
// ListAllVolumes200ApplicationJsonVolumesRegion
/**
 * The region that the block storage volume is located in. When setting a region, the value should be the slug identifier for the region. When you query a block storage volume, the entire region object will be returned.
**/
var ListAllVolumes200ApplicationJsonVolumesRegion = /** @class */ (function (_super) {
    __extends(ListAllVolumes200ApplicationJsonVolumesRegion, _super);
    function ListAllVolumes200ApplicationJsonVolumesRegion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=available" }),
        __metadata("design:type", Boolean)
    ], ListAllVolumes200ApplicationJsonVolumesRegion.prototype, "available", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=features" }),
        __metadata("design:type", Object)
    ], ListAllVolumes200ApplicationJsonVolumesRegion.prototype, "features", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListAllVolumes200ApplicationJsonVolumesRegion.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sizes" }),
        __metadata("design:type", Object)
    ], ListAllVolumes200ApplicationJsonVolumesRegion.prototype, "sizes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], ListAllVolumes200ApplicationJsonVolumesRegion.prototype, "slug", void 0);
    return ListAllVolumes200ApplicationJsonVolumesRegion;
}(utils_1.SpeakeasyBase));
exports.ListAllVolumes200ApplicationJsonVolumesRegion = ListAllVolumes200ApplicationJsonVolumesRegion;
var ListAllVolumes200ApplicationJsonVolumes = /** @class */ (function (_super) {
    __extends(ListAllVolumes200ApplicationJsonVolumes, _super);
    function ListAllVolumes200ApplicationJsonVolumes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], ListAllVolumes200ApplicationJsonVolumes.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ListAllVolumes200ApplicationJsonVolumes.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=droplet_ids" }),
        __metadata("design:type", Array)
    ], ListAllVolumes200ApplicationJsonVolumes.prototype, "dropletIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=filesystem_label" }),
        __metadata("design:type", String)
    ], ListAllVolumes200ApplicationJsonVolumes.prototype, "filesystemLabel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=filesystem_type" }),
        __metadata("design:type", String)
    ], ListAllVolumes200ApplicationJsonVolumes.prototype, "filesystemType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListAllVolumes200ApplicationJsonVolumes.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListAllVolumes200ApplicationJsonVolumes.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=region" }),
        __metadata("design:type", ListAllVolumes200ApplicationJsonVolumesRegion)
    ], ListAllVolumes200ApplicationJsonVolumes.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size_gigabytes" }),
        __metadata("design:type", Number)
    ], ListAllVolumes200ApplicationJsonVolumes.prototype, "sizeGigabytes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], ListAllVolumes200ApplicationJsonVolumes.prototype, "tags", void 0);
    return ListAllVolumes200ApplicationJsonVolumes;
}(utils_1.SpeakeasyBase));
exports.ListAllVolumes200ApplicationJsonVolumes = ListAllVolumes200ApplicationJsonVolumes;
var ListAllVolumes200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAllVolumes200ApplicationJson, _super);
    function ListAllVolumes200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", ListAllVolumes200ApplicationJsonLinks)
    ], ListAllVolumes200ApplicationJson.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListAllVolumes200ApplicationJsonMeta)
    ], ListAllVolumes200ApplicationJson.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=volumes", elemType: ListAllVolumes200ApplicationJsonVolumes }),
        __metadata("design:type", Array)
    ], ListAllVolumes200ApplicationJson.prototype, "volumes", void 0);
    return ListAllVolumes200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAllVolumes200ApplicationJson = ListAllVolumes200ApplicationJson;
var ListAllVolumes401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAllVolumes401ApplicationJson, _super);
    function ListAllVolumes401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListAllVolumes401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListAllVolumes401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], ListAllVolumes401ApplicationJson.prototype, "requestId", void 0);
    return ListAllVolumes401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAllVolumes401ApplicationJson = ListAllVolumes401ApplicationJson;
var ListAllVolumesRequest = /** @class */ (function (_super) {
    __extends(ListAllVolumesRequest, _super);
    function ListAllVolumesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllVolumesQueryParams)
    ], ListAllVolumesRequest.prototype, "queryParams", void 0);
    return ListAllVolumesRequest;
}(utils_1.SpeakeasyBase));
exports.ListAllVolumesRequest = ListAllVolumesRequest;
var ListAllVolumesResponse = /** @class */ (function (_super) {
    __extends(ListAllVolumesResponse, _super);
    function ListAllVolumesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListAllVolumesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListAllVolumesResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListAllVolumesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllVolumes200ApplicationJson)
    ], ListAllVolumesResponse.prototype, "listAllVolumes200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllVolumes401ApplicationJson)
    ], ListAllVolumesResponse.prototype, "listAllVolumes401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], ListAllVolumesResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return ListAllVolumesResponse;
}(utils_1.SpeakeasyBase));
exports.ListAllVolumesResponse = ListAllVolumesResponse;
