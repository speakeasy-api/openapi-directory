"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.UpdateEnvironmentResponse = exports.UpdateEnvironmentRequest = exports.UpdateEnvironmentRequestBody = exports.UpdateEnvironmentRequestBodyWebserverAccessModeEnum = exports.UpdateEnvironmentRequestBodyNetworkConfiguration = exports.UpdateEnvironmentRequestBodyLoggingConfiguration = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var class_transformer_1 = require("class-transformer");
/**
 * Defines the Apache Airflow log types to send to CloudWatch Logs.
 */
var UpdateEnvironmentRequestBodyLoggingConfiguration = /** @class */ (function (_super) {
    __extends(UpdateEnvironmentRequestBodyLoggingConfiguration, _super);
    function UpdateEnvironmentRequestBodyLoggingConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "DagProcessingLogs" }),
        (0, class_transformer_1.Type)(function () { return shared.ModuleLoggingConfigurationInput; }),
        __metadata("design:type", shared.ModuleLoggingConfigurationInput)
    ], UpdateEnvironmentRequestBodyLoggingConfiguration.prototype, "dagProcessingLogs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "SchedulerLogs" }),
        (0, class_transformer_1.Type)(function () { return shared.ModuleLoggingConfigurationInput; }),
        __metadata("design:type", shared.ModuleLoggingConfigurationInput)
    ], UpdateEnvironmentRequestBodyLoggingConfiguration.prototype, "schedulerLogs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "TaskLogs" }),
        (0, class_transformer_1.Type)(function () { return shared.ModuleLoggingConfigurationInput; }),
        __metadata("design:type", shared.ModuleLoggingConfigurationInput)
    ], UpdateEnvironmentRequestBodyLoggingConfiguration.prototype, "taskLogs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "WebserverLogs" }),
        (0, class_transformer_1.Type)(function () { return shared.ModuleLoggingConfigurationInput; }),
        __metadata("design:type", shared.ModuleLoggingConfigurationInput)
    ], UpdateEnvironmentRequestBodyLoggingConfiguration.prototype, "webserverLogs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "WorkerLogs" }),
        (0, class_transformer_1.Type)(function () { return shared.ModuleLoggingConfigurationInput; }),
        __metadata("design:type", shared.ModuleLoggingConfigurationInput)
    ], UpdateEnvironmentRequestBodyLoggingConfiguration.prototype, "workerLogs", void 0);
    return UpdateEnvironmentRequestBodyLoggingConfiguration;
}(utils_1.SpeakeasyBase));
exports.UpdateEnvironmentRequestBodyLoggingConfiguration = UpdateEnvironmentRequestBodyLoggingConfiguration;
/**
 * Defines the VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.
 */
var UpdateEnvironmentRequestBodyNetworkConfiguration = /** @class */ (function (_super) {
    __extends(UpdateEnvironmentRequestBodyNetworkConfiguration, _super);
    function UpdateEnvironmentRequestBodyNetworkConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "SecurityGroupIds" }),
        __metadata("design:type", Array)
    ], UpdateEnvironmentRequestBodyNetworkConfiguration.prototype, "securityGroupIds", void 0);
    return UpdateEnvironmentRequestBodyNetworkConfiguration;
}(utils_1.SpeakeasyBase));
exports.UpdateEnvironmentRequestBodyNetworkConfiguration = UpdateEnvironmentRequestBodyNetworkConfiguration;
/**
 * The Apache Airflow <i>Web server</i> access mode. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-networking.html">Apache Airflow access modes</a>.
 */
var UpdateEnvironmentRequestBodyWebserverAccessModeEnum;
(function (UpdateEnvironmentRequestBodyWebserverAccessModeEnum) {
    UpdateEnvironmentRequestBodyWebserverAccessModeEnum["PrivateOnly"] = "PRIVATE_ONLY";
    UpdateEnvironmentRequestBodyWebserverAccessModeEnum["PublicOnly"] = "PUBLIC_ONLY";
})(UpdateEnvironmentRequestBodyWebserverAccessModeEnum = exports.UpdateEnvironmentRequestBodyWebserverAccessModeEnum || (exports.UpdateEnvironmentRequestBodyWebserverAccessModeEnum = {}));
var UpdateEnvironmentRequestBody = /** @class */ (function (_super) {
    __extends(UpdateEnvironmentRequestBody, _super);
    function UpdateEnvironmentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "AirflowConfigurationOptions" }),
        __metadata("design:type", Object)
    ], UpdateEnvironmentRequestBody.prototype, "airflowConfigurationOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "AirflowVersion" }),
        __metadata("design:type", String)
    ], UpdateEnvironmentRequestBody.prototype, "airflowVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "DagS3Path" }),
        __metadata("design:type", String)
    ], UpdateEnvironmentRequestBody.prototype, "dagS3Path", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "EnvironmentClass" }),
        __metadata("design:type", String)
    ], UpdateEnvironmentRequestBody.prototype, "environmentClass", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "ExecutionRoleArn" }),
        __metadata("design:type", String)
    ], UpdateEnvironmentRequestBody.prototype, "executionRoleArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "LoggingConfiguration" }),
        (0, class_transformer_1.Type)(function () { return UpdateEnvironmentRequestBodyLoggingConfiguration; }),
        __metadata("design:type", UpdateEnvironmentRequestBodyLoggingConfiguration)
    ], UpdateEnvironmentRequestBody.prototype, "loggingConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "MaxWorkers" }),
        __metadata("design:type", Number)
    ], UpdateEnvironmentRequestBody.prototype, "maxWorkers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "MinWorkers" }),
        __metadata("design:type", Number)
    ], UpdateEnvironmentRequestBody.prototype, "minWorkers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "NetworkConfiguration" }),
        (0, class_transformer_1.Type)(function () { return UpdateEnvironmentRequestBodyNetworkConfiguration; }),
        __metadata("design:type", UpdateEnvironmentRequestBodyNetworkConfiguration)
    ], UpdateEnvironmentRequestBody.prototype, "networkConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "PluginsS3ObjectVersion" }),
        __metadata("design:type", String)
    ], UpdateEnvironmentRequestBody.prototype, "pluginsS3ObjectVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "PluginsS3Path" }),
        __metadata("design:type", String)
    ], UpdateEnvironmentRequestBody.prototype, "pluginsS3Path", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "RequirementsS3ObjectVersion" }),
        __metadata("design:type", String)
    ], UpdateEnvironmentRequestBody.prototype, "requirementsS3ObjectVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "RequirementsS3Path" }),
        __metadata("design:type", String)
    ], UpdateEnvironmentRequestBody.prototype, "requirementsS3Path", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Schedulers" }),
        __metadata("design:type", Number)
    ], UpdateEnvironmentRequestBody.prototype, "schedulers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "SourceBucketArn" }),
        __metadata("design:type", String)
    ], UpdateEnvironmentRequestBody.prototype, "sourceBucketArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "WebserverAccessMode" }),
        __metadata("design:type", String)
    ], UpdateEnvironmentRequestBody.prototype, "webserverAccessMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "WeeklyMaintenanceWindowStart" }),
        __metadata("design:type", String)
    ], UpdateEnvironmentRequestBody.prototype, "weeklyMaintenanceWindowStart", void 0);
    return UpdateEnvironmentRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateEnvironmentRequestBody = UpdateEnvironmentRequestBody;
var UpdateEnvironmentRequest = /** @class */ (function (_super) {
    __extends(UpdateEnvironmentRequest, _super);
    function UpdateEnvironmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=Name",
        }),
        __metadata("design:type", String)
    ], UpdateEnvironmentRequest.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateEnvironmentRequestBody)
    ], UpdateEnvironmentRequest.prototype, "requestBody", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Algorithm",
        }),
        __metadata("design:type", String)
    ], UpdateEnvironmentRequest.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256",
        }),
        __metadata("design:type", String)
    ], UpdateEnvironmentRequest.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Credential",
        }),
        __metadata("design:type", String)
    ], UpdateEnvironmentRequest.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Date",
        }),
        __metadata("design:type", String)
    ], UpdateEnvironmentRequest.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Security-Token",
        }),
        __metadata("design:type", String)
    ], UpdateEnvironmentRequest.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Signature",
        }),
        __metadata("design:type", String)
    ], UpdateEnvironmentRequest.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders",
        }),
        __metadata("design:type", String)
    ], UpdateEnvironmentRequest.prototype, "xAmzSignedHeaders", void 0);
    return UpdateEnvironmentRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateEnvironmentRequest = UpdateEnvironmentRequest;
var UpdateEnvironmentResponse = /** @class */ (function (_super) {
    __extends(UpdateEnvironmentResponse, _super);
    function UpdateEnvironmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateEnvironmentResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateEnvironmentResponse.prototype, "internalServerException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateEnvironmentResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateEnvironmentResponse.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateEnvironmentResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UpdateEnvironmentOutput)
    ], UpdateEnvironmentResponse.prototype, "updateEnvironmentOutput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateEnvironmentResponse.prototype, "validationException", void 0);
    return UpdateEnvironmentResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateEnvironmentResponse = UpdateEnvironmentResponse;
