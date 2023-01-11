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
exports.ListGarbageCollectionsResponse = exports.ListGarbageCollectionsRequest = exports.ListGarbageCollections401ApplicationJson = exports.ListGarbageCollections200ApplicationJson = exports.ListGarbageCollectionsQueryParams = exports.ListGarbageCollectionsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListGarbageCollectionsPathParams = /** @class */ (function (_super) {
    __extends(ListGarbageCollectionsPathParams, _super);
    function ListGarbageCollectionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=registry_name" }),
        __metadata("design:type", String)
    ], ListGarbageCollectionsPathParams.prototype, "registryName", void 0);
    return ListGarbageCollectionsPathParams;
}(utils_1.SpeakeasyBase));
exports.ListGarbageCollectionsPathParams = ListGarbageCollectionsPathParams;
var ListGarbageCollectionsQueryParams = /** @class */ (function (_super) {
    __extends(ListGarbageCollectionsQueryParams, _super);
    function ListGarbageCollectionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ListGarbageCollectionsQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ListGarbageCollectionsQueryParams.prototype, "perPage", void 0);
    return ListGarbageCollectionsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListGarbageCollectionsQueryParams = ListGarbageCollectionsQueryParams;
var ListGarbageCollections200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListGarbageCollections200ApplicationJson, _super);
    function ListGarbageCollections200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=garbage_collections", elemType: shared.Onev21registry1Percent7BregistryNamePercent7D1garbageCollectionPostResponses201ContentApplication1jsonSchemaPropertiesGarbageCollection }),
        __metadata("design:type", Array)
    ], ListGarbageCollections200ApplicationJson.prototype, "garbageCollections", void 0);
    return ListGarbageCollections200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListGarbageCollections200ApplicationJson = ListGarbageCollections200ApplicationJson;
var ListGarbageCollections401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListGarbageCollections401ApplicationJson, _super);
    function ListGarbageCollections401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListGarbageCollections401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListGarbageCollections401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], ListGarbageCollections401ApplicationJson.prototype, "requestId", void 0);
    return ListGarbageCollections401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListGarbageCollections401ApplicationJson = ListGarbageCollections401ApplicationJson;
var ListGarbageCollectionsRequest = /** @class */ (function (_super) {
    __extends(ListGarbageCollectionsRequest, _super);
    function ListGarbageCollectionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListGarbageCollectionsPathParams)
    ], ListGarbageCollectionsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListGarbageCollectionsQueryParams)
    ], ListGarbageCollectionsRequest.prototype, "queryParams", void 0);
    return ListGarbageCollectionsRequest;
}(utils_1.SpeakeasyBase));
exports.ListGarbageCollectionsRequest = ListGarbageCollectionsRequest;
var ListGarbageCollectionsResponse = /** @class */ (function (_super) {
    __extends(ListGarbageCollectionsResponse, _super);
    function ListGarbageCollectionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListGarbageCollectionsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListGarbageCollectionsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListGarbageCollectionsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListGarbageCollections200ApplicationJson)
    ], ListGarbageCollectionsResponse.prototype, "listGarbageCollections200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListGarbageCollections401ApplicationJson)
    ], ListGarbageCollectionsResponse.prototype, "listGarbageCollections401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], ListGarbageCollectionsResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return ListGarbageCollectionsResponse;
}(utils_1.SpeakeasyBase));
exports.ListGarbageCollectionsResponse = ListGarbageCollectionsResponse;
