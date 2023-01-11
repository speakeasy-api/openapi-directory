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
exports.ListVolumeSnapshotsResponse = exports.ListVolumeSnapshotsRequest = exports.ListVolumeSnapshots401ApplicationJson = exports.ListVolumeSnapshots200ApplicationJson = exports.ListVolumeSnapshots200ApplicationJsonMeta = exports.ListVolumeSnapshots200ApplicationJsonLinks = exports.ListVolumeSnapshots200ApplicationJsonLinksPages2 = exports.ListVolumeSnapshots200ApplicationJsonLinksPages1 = exports.ListVolumeSnapshotsQueryParams = exports.ListVolumeSnapshotsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListVolumeSnapshotsPathParams = /** @class */ (function (_super) {
    __extends(ListVolumeSnapshotsPathParams, _super);
    function ListVolumeSnapshotsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=volume_id" }),
        __metadata("design:type", String)
    ], ListVolumeSnapshotsPathParams.prototype, "volumeId", void 0);
    return ListVolumeSnapshotsPathParams;
}(utils_1.SpeakeasyBase));
exports.ListVolumeSnapshotsPathParams = ListVolumeSnapshotsPathParams;
var ListVolumeSnapshotsQueryParams = /** @class */ (function (_super) {
    __extends(ListVolumeSnapshotsQueryParams, _super);
    function ListVolumeSnapshotsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ListVolumeSnapshotsQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ListVolumeSnapshotsQueryParams.prototype, "perPage", void 0);
    return ListVolumeSnapshotsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListVolumeSnapshotsQueryParams = ListVolumeSnapshotsQueryParams;
var ListVolumeSnapshots200ApplicationJsonLinksPages1 = /** @class */ (function (_super) {
    __extends(ListVolumeSnapshots200ApplicationJsonLinksPages1, _super);
    function ListVolumeSnapshots200ApplicationJsonLinksPages1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", String)
    ], ListVolumeSnapshots200ApplicationJsonLinksPages1.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], ListVolumeSnapshots200ApplicationJsonLinksPages1.prototype, "next", void 0);
    return ListVolumeSnapshots200ApplicationJsonLinksPages1;
}(utils_1.SpeakeasyBase));
exports.ListVolumeSnapshots200ApplicationJsonLinksPages1 = ListVolumeSnapshots200ApplicationJsonLinksPages1;
var ListVolumeSnapshots200ApplicationJsonLinksPages2 = /** @class */ (function (_super) {
    __extends(ListVolumeSnapshots200ApplicationJsonLinksPages2, _super);
    function ListVolumeSnapshots200ApplicationJsonLinksPages2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", String)
    ], ListVolumeSnapshots200ApplicationJsonLinksPages2.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", String)
    ], ListVolumeSnapshots200ApplicationJsonLinksPages2.prototype, "prev", void 0);
    return ListVolumeSnapshots200ApplicationJsonLinksPages2;
}(utils_1.SpeakeasyBase));
exports.ListVolumeSnapshots200ApplicationJsonLinksPages2 = ListVolumeSnapshots200ApplicationJsonLinksPages2;
var ListVolumeSnapshots200ApplicationJsonLinks = /** @class */ (function (_super) {
    __extends(ListVolumeSnapshots200ApplicationJsonLinks, _super);
    function ListVolumeSnapshots200ApplicationJsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pages" }),
        __metadata("design:type", Object)
    ], ListVolumeSnapshots200ApplicationJsonLinks.prototype, "pages", void 0);
    return ListVolumeSnapshots200ApplicationJsonLinks;
}(utils_1.SpeakeasyBase));
exports.ListVolumeSnapshots200ApplicationJsonLinks = ListVolumeSnapshots200ApplicationJsonLinks;
// ListVolumeSnapshots200ApplicationJsonMeta
/**
 * Information about the response itself.
**/
var ListVolumeSnapshots200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(ListVolumeSnapshots200ApplicationJsonMeta, _super);
    function ListVolumeSnapshots200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ListVolumeSnapshots200ApplicationJsonMeta.prototype, "total", void 0);
    return ListVolumeSnapshots200ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.ListVolumeSnapshots200ApplicationJsonMeta = ListVolumeSnapshots200ApplicationJsonMeta;
var ListVolumeSnapshots200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListVolumeSnapshots200ApplicationJson, _super);
    function ListVolumeSnapshots200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", ListVolumeSnapshots200ApplicationJsonLinks)
    ], ListVolumeSnapshots200ApplicationJson.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListVolumeSnapshots200ApplicationJsonMeta)
    ], ListVolumeSnapshots200ApplicationJson.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=snapshots", elemType: shared.Onev21snapshotsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItems }),
        __metadata("design:type", Array)
    ], ListVolumeSnapshots200ApplicationJson.prototype, "snapshots", void 0);
    return ListVolumeSnapshots200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListVolumeSnapshots200ApplicationJson = ListVolumeSnapshots200ApplicationJson;
var ListVolumeSnapshots401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListVolumeSnapshots401ApplicationJson, _super);
    function ListVolumeSnapshots401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListVolumeSnapshots401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListVolumeSnapshots401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], ListVolumeSnapshots401ApplicationJson.prototype, "requestId", void 0);
    return ListVolumeSnapshots401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListVolumeSnapshots401ApplicationJson = ListVolumeSnapshots401ApplicationJson;
var ListVolumeSnapshotsRequest = /** @class */ (function (_super) {
    __extends(ListVolumeSnapshotsRequest, _super);
    function ListVolumeSnapshotsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListVolumeSnapshotsPathParams)
    ], ListVolumeSnapshotsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListVolumeSnapshotsQueryParams)
    ], ListVolumeSnapshotsRequest.prototype, "queryParams", void 0);
    return ListVolumeSnapshotsRequest;
}(utils_1.SpeakeasyBase));
exports.ListVolumeSnapshotsRequest = ListVolumeSnapshotsRequest;
var ListVolumeSnapshotsResponse = /** @class */ (function (_super) {
    __extends(ListVolumeSnapshotsResponse, _super);
    function ListVolumeSnapshotsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListVolumeSnapshotsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListVolumeSnapshotsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListVolumeSnapshotsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListVolumeSnapshots200ApplicationJson)
    ], ListVolumeSnapshotsResponse.prototype, "listVolumeSnapshots200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListVolumeSnapshots401ApplicationJson)
    ], ListVolumeSnapshotsResponse.prototype, "listVolumeSnapshots401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], ListVolumeSnapshotsResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return ListVolumeSnapshotsResponse;
}(utils_1.SpeakeasyBase));
exports.ListVolumeSnapshotsResponse = ListVolumeSnapshotsResponse;
