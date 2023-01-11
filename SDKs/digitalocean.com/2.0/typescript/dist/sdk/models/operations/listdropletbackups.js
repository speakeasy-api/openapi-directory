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
exports.ListDropletBackupsResponse = exports.ListDropletBackupsRequest = exports.ListDropletBackups401ApplicationJson = exports.ListDropletBackups200ApplicationJson = exports.ListDropletBackups200ApplicationJsonMeta = exports.ListDropletBackups200ApplicationJsonLinks = exports.ListDropletBackups200ApplicationJsonLinksPages2 = exports.ListDropletBackups200ApplicationJsonLinksPages1 = exports.ListDropletBackups200ApplicationJsonBackups = exports.ListDropletBackups200ApplicationJsonBackupsTypeEnum = exports.ListDropletBackupsQueryParams = exports.ListDropletBackupsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListDropletBackupsPathParams = /** @class */ (function (_super) {
    __extends(ListDropletBackupsPathParams, _super);
    function ListDropletBackupsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=droplet_id" }),
        __metadata("design:type", Number)
    ], ListDropletBackupsPathParams.prototype, "dropletId", void 0);
    return ListDropletBackupsPathParams;
}(utils_1.SpeakeasyBase));
exports.ListDropletBackupsPathParams = ListDropletBackupsPathParams;
var ListDropletBackupsQueryParams = /** @class */ (function (_super) {
    __extends(ListDropletBackupsQueryParams, _super);
    function ListDropletBackupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ListDropletBackupsQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ListDropletBackupsQueryParams.prototype, "perPage", void 0);
    return ListDropletBackupsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListDropletBackupsQueryParams = ListDropletBackupsQueryParams;
var ListDropletBackups200ApplicationJsonBackupsTypeEnum;
(function (ListDropletBackups200ApplicationJsonBackupsTypeEnum) {
    ListDropletBackups200ApplicationJsonBackupsTypeEnum["Snapshot"] = "snapshot";
    ListDropletBackups200ApplicationJsonBackupsTypeEnum["Backup"] = "backup";
})(ListDropletBackups200ApplicationJsonBackupsTypeEnum = exports.ListDropletBackups200ApplicationJsonBackupsTypeEnum || (exports.ListDropletBackups200ApplicationJsonBackupsTypeEnum = {}));
var ListDropletBackups200ApplicationJsonBackups = /** @class */ (function (_super) {
    __extends(ListDropletBackups200ApplicationJsonBackups, _super);
    function ListDropletBackups200ApplicationJsonBackups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], ListDropletBackups200ApplicationJsonBackups.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ListDropletBackups200ApplicationJsonBackups.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=min_disk_size" }),
        __metadata("design:type", Number)
    ], ListDropletBackups200ApplicationJsonBackups.prototype, "minDiskSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListDropletBackups200ApplicationJsonBackups.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=regions" }),
        __metadata("design:type", Array)
    ], ListDropletBackups200ApplicationJsonBackups.prototype, "regions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size_gigabytes" }),
        __metadata("design:type", Number)
    ], ListDropletBackups200ApplicationJsonBackups.prototype, "sizeGigabytes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ListDropletBackups200ApplicationJsonBackups.prototype, "type", void 0);
    return ListDropletBackups200ApplicationJsonBackups;
}(utils_1.SpeakeasyBase));
exports.ListDropletBackups200ApplicationJsonBackups = ListDropletBackups200ApplicationJsonBackups;
var ListDropletBackups200ApplicationJsonLinksPages1 = /** @class */ (function (_super) {
    __extends(ListDropletBackups200ApplicationJsonLinksPages1, _super);
    function ListDropletBackups200ApplicationJsonLinksPages1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", String)
    ], ListDropletBackups200ApplicationJsonLinksPages1.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], ListDropletBackups200ApplicationJsonLinksPages1.prototype, "next", void 0);
    return ListDropletBackups200ApplicationJsonLinksPages1;
}(utils_1.SpeakeasyBase));
exports.ListDropletBackups200ApplicationJsonLinksPages1 = ListDropletBackups200ApplicationJsonLinksPages1;
var ListDropletBackups200ApplicationJsonLinksPages2 = /** @class */ (function (_super) {
    __extends(ListDropletBackups200ApplicationJsonLinksPages2, _super);
    function ListDropletBackups200ApplicationJsonLinksPages2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", String)
    ], ListDropletBackups200ApplicationJsonLinksPages2.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", String)
    ], ListDropletBackups200ApplicationJsonLinksPages2.prototype, "prev", void 0);
    return ListDropletBackups200ApplicationJsonLinksPages2;
}(utils_1.SpeakeasyBase));
exports.ListDropletBackups200ApplicationJsonLinksPages2 = ListDropletBackups200ApplicationJsonLinksPages2;
var ListDropletBackups200ApplicationJsonLinks = /** @class */ (function (_super) {
    __extends(ListDropletBackups200ApplicationJsonLinks, _super);
    function ListDropletBackups200ApplicationJsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pages" }),
        __metadata("design:type", Object)
    ], ListDropletBackups200ApplicationJsonLinks.prototype, "pages", void 0);
    return ListDropletBackups200ApplicationJsonLinks;
}(utils_1.SpeakeasyBase));
exports.ListDropletBackups200ApplicationJsonLinks = ListDropletBackups200ApplicationJsonLinks;
// ListDropletBackups200ApplicationJsonMeta
/**
 * Information about the response itself.
**/
var ListDropletBackups200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(ListDropletBackups200ApplicationJsonMeta, _super);
    function ListDropletBackups200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ListDropletBackups200ApplicationJsonMeta.prototype, "total", void 0);
    return ListDropletBackups200ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.ListDropletBackups200ApplicationJsonMeta = ListDropletBackups200ApplicationJsonMeta;
var ListDropletBackups200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListDropletBackups200ApplicationJson, _super);
    function ListDropletBackups200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=backups", elemType: ListDropletBackups200ApplicationJsonBackups }),
        __metadata("design:type", Array)
    ], ListDropletBackups200ApplicationJson.prototype, "backups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", ListDropletBackups200ApplicationJsonLinks)
    ], ListDropletBackups200ApplicationJson.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListDropletBackups200ApplicationJsonMeta)
    ], ListDropletBackups200ApplicationJson.prototype, "meta", void 0);
    return ListDropletBackups200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListDropletBackups200ApplicationJson = ListDropletBackups200ApplicationJson;
var ListDropletBackups401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListDropletBackups401ApplicationJson, _super);
    function ListDropletBackups401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListDropletBackups401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListDropletBackups401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], ListDropletBackups401ApplicationJson.prototype, "requestId", void 0);
    return ListDropletBackups401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListDropletBackups401ApplicationJson = ListDropletBackups401ApplicationJson;
var ListDropletBackupsRequest = /** @class */ (function (_super) {
    __extends(ListDropletBackupsRequest, _super);
    function ListDropletBackupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDropletBackupsPathParams)
    ], ListDropletBackupsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDropletBackupsQueryParams)
    ], ListDropletBackupsRequest.prototype, "queryParams", void 0);
    return ListDropletBackupsRequest;
}(utils_1.SpeakeasyBase));
exports.ListDropletBackupsRequest = ListDropletBackupsRequest;
var ListDropletBackupsResponse = /** @class */ (function (_super) {
    __extends(ListDropletBackupsResponse, _super);
    function ListDropletBackupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListDropletBackupsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListDropletBackupsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListDropletBackupsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDropletBackups200ApplicationJson)
    ], ListDropletBackupsResponse.prototype, "listDropletBackups200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDropletBackups401ApplicationJson)
    ], ListDropletBackupsResponse.prototype, "listDropletBackups401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], ListDropletBackupsResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return ListDropletBackupsResponse;
}(utils_1.SpeakeasyBase));
exports.ListDropletBackupsResponse = ListDropletBackupsResponse;
