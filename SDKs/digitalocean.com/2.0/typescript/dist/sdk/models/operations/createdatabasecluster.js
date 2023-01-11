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
exports.CreateDatabaseClusterResponse = exports.CreateDatabaseClusterRequest = exports.CreateDatabaseCluster401ApplicationJson = exports.CreateDatabaseCluster201ApplicationJson = exports.CreateDatabaseClusterRequestBodyInput = exports.CreateDatabaseClusterRequestBodyMaintenanceWindowInput = exports.CreateDatabaseClusterRequestBodyEngineEnum = exports.CreateDatabaseClusterRequestBodyBackupRestore = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateDatabaseClusterRequestBodyBackupRestore = /** @class */ (function (_super) {
    __extends(CreateDatabaseClusterRequestBodyBackupRestore, _super);
    function CreateDatabaseClusterRequestBodyBackupRestore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=backup_created_at" }),
        __metadata("design:type", Date)
    ], CreateDatabaseClusterRequestBodyBackupRestore.prototype, "backupCreatedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=database_name" }),
        __metadata("design:type", String)
    ], CreateDatabaseClusterRequestBodyBackupRestore.prototype, "databaseName", void 0);
    return CreateDatabaseClusterRequestBodyBackupRestore;
}(utils_1.SpeakeasyBase));
exports.CreateDatabaseClusterRequestBodyBackupRestore = CreateDatabaseClusterRequestBodyBackupRestore;
var CreateDatabaseClusterRequestBodyEngineEnum;
(function (CreateDatabaseClusterRequestBodyEngineEnum) {
    CreateDatabaseClusterRequestBodyEngineEnum["Pg"] = "pg";
    CreateDatabaseClusterRequestBodyEngineEnum["Mysql"] = "mysql";
    CreateDatabaseClusterRequestBodyEngineEnum["Redis"] = "redis";
    CreateDatabaseClusterRequestBodyEngineEnum["Mongodb"] = "mongodb";
})(CreateDatabaseClusterRequestBodyEngineEnum = exports.CreateDatabaseClusterRequestBodyEngineEnum || (exports.CreateDatabaseClusterRequestBodyEngineEnum = {}));
var CreateDatabaseClusterRequestBodyMaintenanceWindowInput = /** @class */ (function (_super) {
    __extends(CreateDatabaseClusterRequestBodyMaintenanceWindowInput, _super);
    function CreateDatabaseClusterRequestBodyMaintenanceWindowInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=day" }),
        __metadata("design:type", String)
    ], CreateDatabaseClusterRequestBodyMaintenanceWindowInput.prototype, "day", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hour" }),
        __metadata("design:type", String)
    ], CreateDatabaseClusterRequestBodyMaintenanceWindowInput.prototype, "hour", void 0);
    return CreateDatabaseClusterRequestBodyMaintenanceWindowInput;
}(utils_1.SpeakeasyBase));
exports.CreateDatabaseClusterRequestBodyMaintenanceWindowInput = CreateDatabaseClusterRequestBodyMaintenanceWindowInput;
var CreateDatabaseClusterRequestBodyInput = /** @class */ (function (_super) {
    __extends(CreateDatabaseClusterRequestBodyInput, _super);
    function CreateDatabaseClusterRequestBodyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=backup_restore" }),
        __metadata("design:type", CreateDatabaseClusterRequestBodyBackupRestore)
    ], CreateDatabaseClusterRequestBodyInput.prototype, "backupRestore", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=engine" }),
        __metadata("design:type", String)
    ], CreateDatabaseClusterRequestBodyInput.prototype, "engine", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maintenance_window" }),
        __metadata("design:type", CreateDatabaseClusterRequestBodyMaintenanceWindowInput)
    ], CreateDatabaseClusterRequestBodyInput.prototype, "maintenanceWindow", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateDatabaseClusterRequestBodyInput.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=num_nodes" }),
        __metadata("design:type", Number)
    ], CreateDatabaseClusterRequestBodyInput.prototype, "numNodes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=private_network_uuid" }),
        __metadata("design:type", String)
    ], CreateDatabaseClusterRequestBodyInput.prototype, "privateNetworkUuid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], CreateDatabaseClusterRequestBodyInput.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size" }),
        __metadata("design:type", String)
    ], CreateDatabaseClusterRequestBodyInput.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], CreateDatabaseClusterRequestBodyInput.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], CreateDatabaseClusterRequestBodyInput.prototype, "version", void 0);
    return CreateDatabaseClusterRequestBodyInput;
}(utils_1.SpeakeasyBase));
exports.CreateDatabaseClusterRequestBodyInput = CreateDatabaseClusterRequestBodyInput;
var CreateDatabaseCluster201ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateDatabaseCluster201ApplicationJson, _super);
    function CreateDatabaseCluster201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=database" }),
        __metadata("design:type", shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems)
    ], CreateDatabaseCluster201ApplicationJson.prototype, "database", void 0);
    return CreateDatabaseCluster201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateDatabaseCluster201ApplicationJson = CreateDatabaseCluster201ApplicationJson;
var CreateDatabaseCluster401ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateDatabaseCluster401ApplicationJson, _super);
    function CreateDatabaseCluster401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateDatabaseCluster401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateDatabaseCluster401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], CreateDatabaseCluster401ApplicationJson.prototype, "requestId", void 0);
    return CreateDatabaseCluster401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateDatabaseCluster401ApplicationJson = CreateDatabaseCluster401ApplicationJson;
var CreateDatabaseClusterRequest = /** @class */ (function (_super) {
    __extends(CreateDatabaseClusterRequest, _super);
    function CreateDatabaseClusterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateDatabaseClusterRequestBodyInput)
    ], CreateDatabaseClusterRequest.prototype, "request", void 0);
    return CreateDatabaseClusterRequest;
}(utils_1.SpeakeasyBase));
exports.CreateDatabaseClusterRequest = CreateDatabaseClusterRequest;
var CreateDatabaseClusterResponse = /** @class */ (function (_super) {
    __extends(CreateDatabaseClusterResponse, _super);
    function CreateDatabaseClusterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateDatabaseClusterResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateDatabaseClusterResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateDatabaseClusterResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateDatabaseCluster201ApplicationJson)
    ], CreateDatabaseClusterResponse.prototype, "createDatabaseCluster201ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateDatabaseCluster401ApplicationJson)
    ], CreateDatabaseClusterResponse.prototype, "createDatabaseCluster401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], CreateDatabaseClusterResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return CreateDatabaseClusterResponse;
}(utils_1.SpeakeasyBase));
exports.CreateDatabaseClusterResponse = CreateDatabaseClusterResponse;
