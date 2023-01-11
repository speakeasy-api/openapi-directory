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
exports.RunGarbageCollectionResponse = exports.RunGarbageCollectionRequest = exports.RunGarbageCollection401ApplicationJson = exports.RunGarbageCollection201ApplicationJson = exports.RunGarbageCollection201ApplicationJsonGarbageCollection = exports.RunGarbageCollection201ApplicationJsonGarbageCollectionStatusEnum = exports.RunGarbageCollectionPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var RunGarbageCollectionPathParams = /** @class */ (function (_super) {
    __extends(RunGarbageCollectionPathParams, _super);
    function RunGarbageCollectionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=registry_name" }),
        __metadata("design:type", String)
    ], RunGarbageCollectionPathParams.prototype, "registryName", void 0);
    return RunGarbageCollectionPathParams;
}(utils_1.SpeakeasyBase));
exports.RunGarbageCollectionPathParams = RunGarbageCollectionPathParams;
var RunGarbageCollection201ApplicationJsonGarbageCollectionStatusEnum;
(function (RunGarbageCollection201ApplicationJsonGarbageCollectionStatusEnum) {
    RunGarbageCollection201ApplicationJsonGarbageCollectionStatusEnum["Requested"] = "requested";
    RunGarbageCollection201ApplicationJsonGarbageCollectionStatusEnum["WaitingForWriteJwTsToExpire"] = "waiting for write JWTs to expire";
    RunGarbageCollection201ApplicationJsonGarbageCollectionStatusEnum["ScanningManifests"] = "scanning manifests";
    RunGarbageCollection201ApplicationJsonGarbageCollectionStatusEnum["DeletingUnreferencedBlobs"] = "deleting unreferenced blobs";
    RunGarbageCollection201ApplicationJsonGarbageCollectionStatusEnum["Cancelling"] = "cancelling";
    RunGarbageCollection201ApplicationJsonGarbageCollectionStatusEnum["Failed"] = "failed";
    RunGarbageCollection201ApplicationJsonGarbageCollectionStatusEnum["Succeeded"] = "succeeded";
    RunGarbageCollection201ApplicationJsonGarbageCollectionStatusEnum["Cancelled"] = "cancelled";
})(RunGarbageCollection201ApplicationJsonGarbageCollectionStatusEnum = exports.RunGarbageCollection201ApplicationJsonGarbageCollectionStatusEnum || (exports.RunGarbageCollection201ApplicationJsonGarbageCollectionStatusEnum = {}));
var RunGarbageCollection201ApplicationJsonGarbageCollection = /** @class */ (function (_super) {
    __extends(RunGarbageCollection201ApplicationJsonGarbageCollection, _super);
    function RunGarbageCollection201ApplicationJsonGarbageCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=blobs_deleted" }),
        __metadata("design:type", Number)
    ], RunGarbageCollection201ApplicationJsonGarbageCollection.prototype, "blobsDeleted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], RunGarbageCollection201ApplicationJsonGarbageCollection.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=freed_bytes" }),
        __metadata("design:type", Number)
    ], RunGarbageCollection201ApplicationJsonGarbageCollection.prototype, "freedBytes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registry_name" }),
        __metadata("design:type", String)
    ], RunGarbageCollection201ApplicationJsonGarbageCollection.prototype, "registryName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], RunGarbageCollection201ApplicationJsonGarbageCollection.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], RunGarbageCollection201ApplicationJsonGarbageCollection.prototype, "updatedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], RunGarbageCollection201ApplicationJsonGarbageCollection.prototype, "uuid", void 0);
    return RunGarbageCollection201ApplicationJsonGarbageCollection;
}(utils_1.SpeakeasyBase));
exports.RunGarbageCollection201ApplicationJsonGarbageCollection = RunGarbageCollection201ApplicationJsonGarbageCollection;
var RunGarbageCollection201ApplicationJson = /** @class */ (function (_super) {
    __extends(RunGarbageCollection201ApplicationJson, _super);
    function RunGarbageCollection201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=garbage_collection" }),
        __metadata("design:type", RunGarbageCollection201ApplicationJsonGarbageCollection)
    ], RunGarbageCollection201ApplicationJson.prototype, "garbageCollection", void 0);
    return RunGarbageCollection201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.RunGarbageCollection201ApplicationJson = RunGarbageCollection201ApplicationJson;
var RunGarbageCollection401ApplicationJson = /** @class */ (function (_super) {
    __extends(RunGarbageCollection401ApplicationJson, _super);
    function RunGarbageCollection401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RunGarbageCollection401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], RunGarbageCollection401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], RunGarbageCollection401ApplicationJson.prototype, "requestId", void 0);
    return RunGarbageCollection401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.RunGarbageCollection401ApplicationJson = RunGarbageCollection401ApplicationJson;
var RunGarbageCollectionRequest = /** @class */ (function (_super) {
    __extends(RunGarbageCollectionRequest, _super);
    function RunGarbageCollectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RunGarbageCollectionPathParams)
    ], RunGarbageCollectionRequest.prototype, "pathParams", void 0);
    return RunGarbageCollectionRequest;
}(utils_1.SpeakeasyBase));
exports.RunGarbageCollectionRequest = RunGarbageCollectionRequest;
var RunGarbageCollectionResponse = /** @class */ (function (_super) {
    __extends(RunGarbageCollectionResponse, _super);
    function RunGarbageCollectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RunGarbageCollectionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], RunGarbageCollectionResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RunGarbageCollectionResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RunGarbageCollection201ApplicationJson)
    ], RunGarbageCollectionResponse.prototype, "runGarbageCollection201ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RunGarbageCollection401ApplicationJson)
    ], RunGarbageCollectionResponse.prototype, "runGarbageCollection401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], RunGarbageCollectionResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return RunGarbageCollectionResponse;
}(utils_1.SpeakeasyBase));
exports.RunGarbageCollectionResponse = RunGarbageCollectionResponse;
