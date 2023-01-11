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
exports.ListDropletSnapshotsResponse = exports.ListDropletSnapshotsRequest = exports.ListDropletSnapshots401ApplicationJson = exports.ListDropletSnapshots200ApplicationJson = exports.ListDropletSnapshots200ApplicationJsonMeta = exports.ListDropletSnapshots200ApplicationJsonLinks = exports.ListDropletSnapshots200ApplicationJsonLinksPages2 = exports.ListDropletSnapshots200ApplicationJsonLinksPages1 = exports.ListDropletSnapshotsQueryParams = exports.ListDropletSnapshotsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListDropletSnapshotsPathParams = /** @class */ (function (_super) {
    __extends(ListDropletSnapshotsPathParams, _super);
    function ListDropletSnapshotsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=droplet_id" }),
        __metadata("design:type", Number)
    ], ListDropletSnapshotsPathParams.prototype, "dropletId", void 0);
    return ListDropletSnapshotsPathParams;
}(utils_1.SpeakeasyBase));
exports.ListDropletSnapshotsPathParams = ListDropletSnapshotsPathParams;
var ListDropletSnapshotsQueryParams = /** @class */ (function (_super) {
    __extends(ListDropletSnapshotsQueryParams, _super);
    function ListDropletSnapshotsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ListDropletSnapshotsQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ListDropletSnapshotsQueryParams.prototype, "perPage", void 0);
    return ListDropletSnapshotsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListDropletSnapshotsQueryParams = ListDropletSnapshotsQueryParams;
var ListDropletSnapshots200ApplicationJsonLinksPages1 = /** @class */ (function (_super) {
    __extends(ListDropletSnapshots200ApplicationJsonLinksPages1, _super);
    function ListDropletSnapshots200ApplicationJsonLinksPages1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", String)
    ], ListDropletSnapshots200ApplicationJsonLinksPages1.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], ListDropletSnapshots200ApplicationJsonLinksPages1.prototype, "next", void 0);
    return ListDropletSnapshots200ApplicationJsonLinksPages1;
}(utils_1.SpeakeasyBase));
exports.ListDropletSnapshots200ApplicationJsonLinksPages1 = ListDropletSnapshots200ApplicationJsonLinksPages1;
var ListDropletSnapshots200ApplicationJsonLinksPages2 = /** @class */ (function (_super) {
    __extends(ListDropletSnapshots200ApplicationJsonLinksPages2, _super);
    function ListDropletSnapshots200ApplicationJsonLinksPages2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", String)
    ], ListDropletSnapshots200ApplicationJsonLinksPages2.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", String)
    ], ListDropletSnapshots200ApplicationJsonLinksPages2.prototype, "prev", void 0);
    return ListDropletSnapshots200ApplicationJsonLinksPages2;
}(utils_1.SpeakeasyBase));
exports.ListDropletSnapshots200ApplicationJsonLinksPages2 = ListDropletSnapshots200ApplicationJsonLinksPages2;
var ListDropletSnapshots200ApplicationJsonLinks = /** @class */ (function (_super) {
    __extends(ListDropletSnapshots200ApplicationJsonLinks, _super);
    function ListDropletSnapshots200ApplicationJsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pages" }),
        __metadata("design:type", Object)
    ], ListDropletSnapshots200ApplicationJsonLinks.prototype, "pages", void 0);
    return ListDropletSnapshots200ApplicationJsonLinks;
}(utils_1.SpeakeasyBase));
exports.ListDropletSnapshots200ApplicationJsonLinks = ListDropletSnapshots200ApplicationJsonLinks;
// ListDropletSnapshots200ApplicationJsonMeta
/**
 * Information about the response itself.
**/
var ListDropletSnapshots200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(ListDropletSnapshots200ApplicationJsonMeta, _super);
    function ListDropletSnapshots200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ListDropletSnapshots200ApplicationJsonMeta.prototype, "total", void 0);
    return ListDropletSnapshots200ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.ListDropletSnapshots200ApplicationJsonMeta = ListDropletSnapshots200ApplicationJsonMeta;
var ListDropletSnapshots200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListDropletSnapshots200ApplicationJson, _super);
    function ListDropletSnapshots200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", ListDropletSnapshots200ApplicationJsonLinks)
    ], ListDropletSnapshots200ApplicationJson.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListDropletSnapshots200ApplicationJsonMeta)
    ], ListDropletSnapshots200ApplicationJson.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=snapshots", elemType: shared.Onev21droplets1Percent7BdropletIdPercent7D1backupsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesBackupsItems }),
        __metadata("design:type", Array)
    ], ListDropletSnapshots200ApplicationJson.prototype, "snapshots", void 0);
    return ListDropletSnapshots200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListDropletSnapshots200ApplicationJson = ListDropletSnapshots200ApplicationJson;
var ListDropletSnapshots401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListDropletSnapshots401ApplicationJson, _super);
    function ListDropletSnapshots401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListDropletSnapshots401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListDropletSnapshots401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], ListDropletSnapshots401ApplicationJson.prototype, "requestId", void 0);
    return ListDropletSnapshots401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListDropletSnapshots401ApplicationJson = ListDropletSnapshots401ApplicationJson;
var ListDropletSnapshotsRequest = /** @class */ (function (_super) {
    __extends(ListDropletSnapshotsRequest, _super);
    function ListDropletSnapshotsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDropletSnapshotsPathParams)
    ], ListDropletSnapshotsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDropletSnapshotsQueryParams)
    ], ListDropletSnapshotsRequest.prototype, "queryParams", void 0);
    return ListDropletSnapshotsRequest;
}(utils_1.SpeakeasyBase));
exports.ListDropletSnapshotsRequest = ListDropletSnapshotsRequest;
var ListDropletSnapshotsResponse = /** @class */ (function (_super) {
    __extends(ListDropletSnapshotsResponse, _super);
    function ListDropletSnapshotsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListDropletSnapshotsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListDropletSnapshotsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListDropletSnapshotsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDropletSnapshots200ApplicationJson)
    ], ListDropletSnapshotsResponse.prototype, "listDropletSnapshots200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDropletSnapshots401ApplicationJson)
    ], ListDropletSnapshotsResponse.prototype, "listDropletSnapshots401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], ListDropletSnapshotsResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return ListDropletSnapshotsResponse;
}(utils_1.SpeakeasyBase));
exports.ListDropletSnapshotsResponse = ListDropletSnapshotsResponse;
