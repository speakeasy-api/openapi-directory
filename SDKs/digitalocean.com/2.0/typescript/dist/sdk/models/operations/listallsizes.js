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
exports.ListAllSizesResponse = exports.ListAllSizesRequest = exports.ListAllSizes401ApplicationJson = exports.ListAllSizes200ApplicationJson = exports.ListAllSizes200ApplicationJsonMeta = exports.ListAllSizes200ApplicationJsonLinks = exports.ListAllSizes200ApplicationJsonLinksPages2 = exports.ListAllSizes200ApplicationJsonLinksPages1 = exports.ListAllSizesQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListAllSizesQueryParams = /** @class */ (function (_super) {
    __extends(ListAllSizesQueryParams, _super);
    function ListAllSizesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ListAllSizesQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ListAllSizesQueryParams.prototype, "perPage", void 0);
    return ListAllSizesQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListAllSizesQueryParams = ListAllSizesQueryParams;
var ListAllSizes200ApplicationJsonLinksPages1 = /** @class */ (function (_super) {
    __extends(ListAllSizes200ApplicationJsonLinksPages1, _super);
    function ListAllSizes200ApplicationJsonLinksPages1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", String)
    ], ListAllSizes200ApplicationJsonLinksPages1.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], ListAllSizes200ApplicationJsonLinksPages1.prototype, "next", void 0);
    return ListAllSizes200ApplicationJsonLinksPages1;
}(utils_1.SpeakeasyBase));
exports.ListAllSizes200ApplicationJsonLinksPages1 = ListAllSizes200ApplicationJsonLinksPages1;
var ListAllSizes200ApplicationJsonLinksPages2 = /** @class */ (function (_super) {
    __extends(ListAllSizes200ApplicationJsonLinksPages2, _super);
    function ListAllSizes200ApplicationJsonLinksPages2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", String)
    ], ListAllSizes200ApplicationJsonLinksPages2.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", String)
    ], ListAllSizes200ApplicationJsonLinksPages2.prototype, "prev", void 0);
    return ListAllSizes200ApplicationJsonLinksPages2;
}(utils_1.SpeakeasyBase));
exports.ListAllSizes200ApplicationJsonLinksPages2 = ListAllSizes200ApplicationJsonLinksPages2;
var ListAllSizes200ApplicationJsonLinks = /** @class */ (function (_super) {
    __extends(ListAllSizes200ApplicationJsonLinks, _super);
    function ListAllSizes200ApplicationJsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pages" }),
        __metadata("design:type", Object)
    ], ListAllSizes200ApplicationJsonLinks.prototype, "pages", void 0);
    return ListAllSizes200ApplicationJsonLinks;
}(utils_1.SpeakeasyBase));
exports.ListAllSizes200ApplicationJsonLinks = ListAllSizes200ApplicationJsonLinks;
// ListAllSizes200ApplicationJsonMeta
/**
 * Information about the response itself.
**/
var ListAllSizes200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(ListAllSizes200ApplicationJsonMeta, _super);
    function ListAllSizes200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ListAllSizes200ApplicationJsonMeta.prototype, "total", void 0);
    return ListAllSizes200ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.ListAllSizes200ApplicationJsonMeta = ListAllSizes200ApplicationJsonMeta;
var ListAllSizes200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAllSizes200ApplicationJson, _super);
    function ListAllSizes200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", ListAllSizes200ApplicationJsonLinks)
    ], ListAllSizes200ApplicationJson.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListAllSizes200ApplicationJsonMeta)
    ], ListAllSizes200ApplicationJson.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sizes", elemType: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesSize }),
        __metadata("design:type", Array)
    ], ListAllSizes200ApplicationJson.prototype, "sizes", void 0);
    return ListAllSizes200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAllSizes200ApplicationJson = ListAllSizes200ApplicationJson;
var ListAllSizes401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAllSizes401ApplicationJson, _super);
    function ListAllSizes401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListAllSizes401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListAllSizes401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], ListAllSizes401ApplicationJson.prototype, "requestId", void 0);
    return ListAllSizes401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAllSizes401ApplicationJson = ListAllSizes401ApplicationJson;
var ListAllSizesRequest = /** @class */ (function (_super) {
    __extends(ListAllSizesRequest, _super);
    function ListAllSizesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllSizesQueryParams)
    ], ListAllSizesRequest.prototype, "queryParams", void 0);
    return ListAllSizesRequest;
}(utils_1.SpeakeasyBase));
exports.ListAllSizesRequest = ListAllSizesRequest;
var ListAllSizesResponse = /** @class */ (function (_super) {
    __extends(ListAllSizesResponse, _super);
    function ListAllSizesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListAllSizesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListAllSizesResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListAllSizesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllSizes200ApplicationJson)
    ], ListAllSizesResponse.prototype, "listAllSizes200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllSizes401ApplicationJson)
    ], ListAllSizesResponse.prototype, "listAllSizes401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], ListAllSizesResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return ListAllSizesResponse;
}(utils_1.SpeakeasyBase));
exports.ListAllSizesResponse = ListAllSizesResponse;
