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
exports.CreateReplicaResponseOutput = exports.CreateReplicaRequest = exports.CreateReplica401ApplicationJson = exports.CreateReplica201ApplicationJsonOutput = exports.CreateReplicaRequestBodyInput = exports.CreateReplicaPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateReplicaPathParams = /** @class */ (function (_super) {
    __extends(CreateReplicaPathParams, _super);
    function CreateReplicaPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=database_cluster_uuid" }),
        __metadata("design:type", String)
    ], CreateReplicaPathParams.prototype, "databaseClusterUuid", void 0);
    return CreateReplicaPathParams;
}(utils_1.SpeakeasyBase));
exports.CreateReplicaPathParams = CreateReplicaPathParams;
var CreateReplicaRequestBodyInput = /** @class */ (function (_super) {
    __extends(CreateReplicaRequestBodyInput, _super);
    function CreateReplicaRequestBodyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateReplicaRequestBodyInput.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=private_network_uuid" }),
        __metadata("design:type", String)
    ], CreateReplicaRequestBodyInput.prototype, "privateNetworkUuid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], CreateReplicaRequestBodyInput.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size" }),
        __metadata("design:type", String)
    ], CreateReplicaRequestBodyInput.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], CreateReplicaRequestBodyInput.prototype, "tags", void 0);
    return CreateReplicaRequestBodyInput;
}(utils_1.SpeakeasyBase));
exports.CreateReplicaRequestBodyInput = CreateReplicaRequestBodyInput;
var CreateReplica201ApplicationJsonOutput = /** @class */ (function (_super) {
    __extends(CreateReplica201ApplicationJsonOutput, _super);
    function CreateReplica201ApplicationJsonOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=replica" }),
        __metadata("design:type", shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsOutput)
    ], CreateReplica201ApplicationJsonOutput.prototype, "replica", void 0);
    return CreateReplica201ApplicationJsonOutput;
}(utils_1.SpeakeasyBase));
exports.CreateReplica201ApplicationJsonOutput = CreateReplica201ApplicationJsonOutput;
var CreateReplica401ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateReplica401ApplicationJson, _super);
    function CreateReplica401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateReplica401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateReplica401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], CreateReplica401ApplicationJson.prototype, "requestId", void 0);
    return CreateReplica401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateReplica401ApplicationJson = CreateReplica401ApplicationJson;
var CreateReplicaRequest = /** @class */ (function (_super) {
    __extends(CreateReplicaRequest, _super);
    function CreateReplicaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateReplicaPathParams)
    ], CreateReplicaRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateReplicaRequestBodyInput)
    ], CreateReplicaRequest.prototype, "request", void 0);
    return CreateReplicaRequest;
}(utils_1.SpeakeasyBase));
exports.CreateReplicaRequest = CreateReplicaRequest;
var CreateReplicaResponseOutput = /** @class */ (function (_super) {
    __extends(CreateReplicaResponseOutput, _super);
    function CreateReplicaResponseOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateReplicaResponseOutput.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateReplicaResponseOutput.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateReplicaResponseOutput.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateReplica201ApplicationJsonOutput)
    ], CreateReplicaResponseOutput.prototype, "createReplica201ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateReplica401ApplicationJson)
    ], CreateReplicaResponseOutput.prototype, "createReplica401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], CreateReplicaResponseOutput.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return CreateReplicaResponseOutput;
}(utils_1.SpeakeasyBase));
exports.CreateReplicaResponseOutput = CreateReplicaResponseOutput;
