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
exports.ListAllSnapshotsResponse = exports.ListAllSnapshotsRequest = exports.ListAllSnapshots401ApplicationJson = exports.ListAllSnapshots200ApplicationJson = exports.ListAllSnapshots200ApplicationJsonSnapshots = exports.ListAllSnapshots200ApplicationJsonSnapshotsResourceTypeEnum = exports.ListAllSnapshots200ApplicationJsonMeta = exports.ListAllSnapshots200ApplicationJsonLinks = exports.ListAllSnapshots200ApplicationJsonLinksPages2 = exports.ListAllSnapshots200ApplicationJsonLinksPages1 = exports.ListAllSnapshotsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListAllSnapshotsQueryParams = /** @class */ (function (_super) {
    __extends(ListAllSnapshotsQueryParams, _super);
    function ListAllSnapshotsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ListAllSnapshotsQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ListAllSnapshotsQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=resource_type" }),
        __metadata("design:type", String)
    ], ListAllSnapshotsQueryParams.prototype, "resourceType", void 0);
    return ListAllSnapshotsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListAllSnapshotsQueryParams = ListAllSnapshotsQueryParams;
var ListAllSnapshots200ApplicationJsonLinksPages1 = /** @class */ (function (_super) {
    __extends(ListAllSnapshots200ApplicationJsonLinksPages1, _super);
    function ListAllSnapshots200ApplicationJsonLinksPages1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", String)
    ], ListAllSnapshots200ApplicationJsonLinksPages1.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], ListAllSnapshots200ApplicationJsonLinksPages1.prototype, "next", void 0);
    return ListAllSnapshots200ApplicationJsonLinksPages1;
}(utils_1.SpeakeasyBase));
exports.ListAllSnapshots200ApplicationJsonLinksPages1 = ListAllSnapshots200ApplicationJsonLinksPages1;
var ListAllSnapshots200ApplicationJsonLinksPages2 = /** @class */ (function (_super) {
    __extends(ListAllSnapshots200ApplicationJsonLinksPages2, _super);
    function ListAllSnapshots200ApplicationJsonLinksPages2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", String)
    ], ListAllSnapshots200ApplicationJsonLinksPages2.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", String)
    ], ListAllSnapshots200ApplicationJsonLinksPages2.prototype, "prev", void 0);
    return ListAllSnapshots200ApplicationJsonLinksPages2;
}(utils_1.SpeakeasyBase));
exports.ListAllSnapshots200ApplicationJsonLinksPages2 = ListAllSnapshots200ApplicationJsonLinksPages2;
var ListAllSnapshots200ApplicationJsonLinks = /** @class */ (function (_super) {
    __extends(ListAllSnapshots200ApplicationJsonLinks, _super);
    function ListAllSnapshots200ApplicationJsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pages" }),
        __metadata("design:type", Object)
    ], ListAllSnapshots200ApplicationJsonLinks.prototype, "pages", void 0);
    return ListAllSnapshots200ApplicationJsonLinks;
}(utils_1.SpeakeasyBase));
exports.ListAllSnapshots200ApplicationJsonLinks = ListAllSnapshots200ApplicationJsonLinks;
// ListAllSnapshots200ApplicationJsonMeta
/**
 * Information about the response itself.
**/
var ListAllSnapshots200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(ListAllSnapshots200ApplicationJsonMeta, _super);
    function ListAllSnapshots200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ListAllSnapshots200ApplicationJsonMeta.prototype, "total", void 0);
    return ListAllSnapshots200ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.ListAllSnapshots200ApplicationJsonMeta = ListAllSnapshots200ApplicationJsonMeta;
var ListAllSnapshots200ApplicationJsonSnapshotsResourceTypeEnum;
(function (ListAllSnapshots200ApplicationJsonSnapshotsResourceTypeEnum) {
    ListAllSnapshots200ApplicationJsonSnapshotsResourceTypeEnum["Droplet"] = "droplet";
    ListAllSnapshots200ApplicationJsonSnapshotsResourceTypeEnum["Volume"] = "volume";
})(ListAllSnapshots200ApplicationJsonSnapshotsResourceTypeEnum = exports.ListAllSnapshots200ApplicationJsonSnapshotsResourceTypeEnum || (exports.ListAllSnapshots200ApplicationJsonSnapshotsResourceTypeEnum = {}));
var ListAllSnapshots200ApplicationJsonSnapshots = /** @class */ (function (_super) {
    __extends(ListAllSnapshots200ApplicationJsonSnapshots, _super);
    function ListAllSnapshots200ApplicationJsonSnapshots() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], ListAllSnapshots200ApplicationJsonSnapshots.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListAllSnapshots200ApplicationJsonSnapshots.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=min_disk_size" }),
        __metadata("design:type", Number)
    ], ListAllSnapshots200ApplicationJsonSnapshots.prototype, "minDiskSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListAllSnapshots200ApplicationJsonSnapshots.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=regions" }),
        __metadata("design:type", Array)
    ], ListAllSnapshots200ApplicationJsonSnapshots.prototype, "regions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_id" }),
        __metadata("design:type", String)
    ], ListAllSnapshots200ApplicationJsonSnapshots.prototype, "resourceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], ListAllSnapshots200ApplicationJsonSnapshots.prototype, "resourceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size_gigabytes" }),
        __metadata("design:type", Number)
    ], ListAllSnapshots200ApplicationJsonSnapshots.prototype, "sizeGigabytes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], ListAllSnapshots200ApplicationJsonSnapshots.prototype, "tags", void 0);
    return ListAllSnapshots200ApplicationJsonSnapshots;
}(utils_1.SpeakeasyBase));
exports.ListAllSnapshots200ApplicationJsonSnapshots = ListAllSnapshots200ApplicationJsonSnapshots;
var ListAllSnapshots200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAllSnapshots200ApplicationJson, _super);
    function ListAllSnapshots200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", ListAllSnapshots200ApplicationJsonLinks)
    ], ListAllSnapshots200ApplicationJson.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListAllSnapshots200ApplicationJsonMeta)
    ], ListAllSnapshots200ApplicationJson.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=snapshots", elemType: ListAllSnapshots200ApplicationJsonSnapshots }),
        __metadata("design:type", Array)
    ], ListAllSnapshots200ApplicationJson.prototype, "snapshots", void 0);
    return ListAllSnapshots200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAllSnapshots200ApplicationJson = ListAllSnapshots200ApplicationJson;
var ListAllSnapshots401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAllSnapshots401ApplicationJson, _super);
    function ListAllSnapshots401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListAllSnapshots401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListAllSnapshots401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], ListAllSnapshots401ApplicationJson.prototype, "requestId", void 0);
    return ListAllSnapshots401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAllSnapshots401ApplicationJson = ListAllSnapshots401ApplicationJson;
var ListAllSnapshotsRequest = /** @class */ (function (_super) {
    __extends(ListAllSnapshotsRequest, _super);
    function ListAllSnapshotsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllSnapshotsQueryParams)
    ], ListAllSnapshotsRequest.prototype, "queryParams", void 0);
    return ListAllSnapshotsRequest;
}(utils_1.SpeakeasyBase));
exports.ListAllSnapshotsRequest = ListAllSnapshotsRequest;
var ListAllSnapshotsResponse = /** @class */ (function (_super) {
    __extends(ListAllSnapshotsResponse, _super);
    function ListAllSnapshotsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListAllSnapshotsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListAllSnapshotsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListAllSnapshotsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllSnapshots200ApplicationJson)
    ], ListAllSnapshotsResponse.prototype, "listAllSnapshots200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllSnapshots401ApplicationJson)
    ], ListAllSnapshotsResponse.prototype, "listAllSnapshots401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], ListAllSnapshotsResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return ListAllSnapshotsResponse;
}(utils_1.SpeakeasyBase));
exports.ListAllSnapshotsResponse = ListAllSnapshotsResponse;
