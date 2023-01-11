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
exports.UpdateGarbageCollectionResponse = exports.UpdateGarbageCollectionRequest = exports.UpdateGarbageCollection401ApplicationJson = exports.UpdateGarbageCollection200ApplicationJson = exports.UpdateGarbageCollection200ApplicationJsonGarbageCollection = exports.UpdateGarbageCollection200ApplicationJsonGarbageCollectionStatusEnum = exports.UpdateGarbageCollectionRequestBody = exports.UpdateGarbageCollectionPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateGarbageCollectionPathParams = /** @class */ (function (_super) {
    __extends(UpdateGarbageCollectionPathParams, _super);
    function UpdateGarbageCollectionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=garbage_collection_uuid" }),
        __metadata("design:type", String)
    ], UpdateGarbageCollectionPathParams.prototype, "garbageCollectionUuid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=registry_name" }),
        __metadata("design:type", String)
    ], UpdateGarbageCollectionPathParams.prototype, "registryName", void 0);
    return UpdateGarbageCollectionPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateGarbageCollectionPathParams = UpdateGarbageCollectionPathParams;
var UpdateGarbageCollectionRequestBody = /** @class */ (function (_super) {
    __extends(UpdateGarbageCollectionRequestBody, _super);
    function UpdateGarbageCollectionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cancel" }),
        __metadata("design:type", Boolean)
    ], UpdateGarbageCollectionRequestBody.prototype, "cancel", void 0);
    return UpdateGarbageCollectionRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateGarbageCollectionRequestBody = UpdateGarbageCollectionRequestBody;
var UpdateGarbageCollection200ApplicationJsonGarbageCollectionStatusEnum;
(function (UpdateGarbageCollection200ApplicationJsonGarbageCollectionStatusEnum) {
    UpdateGarbageCollection200ApplicationJsonGarbageCollectionStatusEnum["Requested"] = "requested";
    UpdateGarbageCollection200ApplicationJsonGarbageCollectionStatusEnum["WaitingForWriteJwTsToExpire"] = "waiting for write JWTs to expire";
    UpdateGarbageCollection200ApplicationJsonGarbageCollectionStatusEnum["ScanningManifests"] = "scanning manifests";
    UpdateGarbageCollection200ApplicationJsonGarbageCollectionStatusEnum["DeletingUnreferencedBlobs"] = "deleting unreferenced blobs";
    UpdateGarbageCollection200ApplicationJsonGarbageCollectionStatusEnum["Cancelling"] = "cancelling";
    UpdateGarbageCollection200ApplicationJsonGarbageCollectionStatusEnum["Failed"] = "failed";
    UpdateGarbageCollection200ApplicationJsonGarbageCollectionStatusEnum["Succeeded"] = "succeeded";
    UpdateGarbageCollection200ApplicationJsonGarbageCollectionStatusEnum["Cancelled"] = "cancelled";
})(UpdateGarbageCollection200ApplicationJsonGarbageCollectionStatusEnum = exports.UpdateGarbageCollection200ApplicationJsonGarbageCollectionStatusEnum || (exports.UpdateGarbageCollection200ApplicationJsonGarbageCollectionStatusEnum = {}));
var UpdateGarbageCollection200ApplicationJsonGarbageCollection = /** @class */ (function (_super) {
    __extends(UpdateGarbageCollection200ApplicationJsonGarbageCollection, _super);
    function UpdateGarbageCollection200ApplicationJsonGarbageCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=blobs_deleted" }),
        __metadata("design:type", Number)
    ], UpdateGarbageCollection200ApplicationJsonGarbageCollection.prototype, "blobsDeleted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], UpdateGarbageCollection200ApplicationJsonGarbageCollection.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=freed_bytes" }),
        __metadata("design:type", Number)
    ], UpdateGarbageCollection200ApplicationJsonGarbageCollection.prototype, "freedBytes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registry_name" }),
        __metadata("design:type", String)
    ], UpdateGarbageCollection200ApplicationJsonGarbageCollection.prototype, "registryName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], UpdateGarbageCollection200ApplicationJsonGarbageCollection.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], UpdateGarbageCollection200ApplicationJsonGarbageCollection.prototype, "updatedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], UpdateGarbageCollection200ApplicationJsonGarbageCollection.prototype, "uuid", void 0);
    return UpdateGarbageCollection200ApplicationJsonGarbageCollection;
}(utils_1.SpeakeasyBase));
exports.UpdateGarbageCollection200ApplicationJsonGarbageCollection = UpdateGarbageCollection200ApplicationJsonGarbageCollection;
var UpdateGarbageCollection200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateGarbageCollection200ApplicationJson, _super);
    function UpdateGarbageCollection200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=garbage_collection" }),
        __metadata("design:type", UpdateGarbageCollection200ApplicationJsonGarbageCollection)
    ], UpdateGarbageCollection200ApplicationJson.prototype, "garbageCollection", void 0);
    return UpdateGarbageCollection200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateGarbageCollection200ApplicationJson = UpdateGarbageCollection200ApplicationJson;
var UpdateGarbageCollection401ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateGarbageCollection401ApplicationJson, _super);
    function UpdateGarbageCollection401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateGarbageCollection401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], UpdateGarbageCollection401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], UpdateGarbageCollection401ApplicationJson.prototype, "requestId", void 0);
    return UpdateGarbageCollection401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateGarbageCollection401ApplicationJson = UpdateGarbageCollection401ApplicationJson;
var UpdateGarbageCollectionRequest = /** @class */ (function (_super) {
    __extends(UpdateGarbageCollectionRequest, _super);
    function UpdateGarbageCollectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateGarbageCollectionPathParams)
    ], UpdateGarbageCollectionRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateGarbageCollectionRequestBody)
    ], UpdateGarbageCollectionRequest.prototype, "request", void 0);
    return UpdateGarbageCollectionRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateGarbageCollectionRequest = UpdateGarbageCollectionRequest;
var UpdateGarbageCollectionResponse = /** @class */ (function (_super) {
    __extends(UpdateGarbageCollectionResponse, _super);
    function UpdateGarbageCollectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateGarbageCollectionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateGarbageCollectionResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateGarbageCollectionResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateGarbageCollection200ApplicationJson)
    ], UpdateGarbageCollectionResponse.prototype, "updateGarbageCollection200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateGarbageCollection401ApplicationJson)
    ], UpdateGarbageCollectionResponse.prototype, "updateGarbageCollection401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], UpdateGarbageCollectionResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return UpdateGarbageCollectionResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateGarbageCollectionResponse = UpdateGarbageCollectionResponse;
