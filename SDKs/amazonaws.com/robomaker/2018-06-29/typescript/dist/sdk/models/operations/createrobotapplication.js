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
exports.CreateRobotApplicationResponse = exports.CreateRobotApplicationRequest = exports.CreateRobotApplicationRequestBody = exports.CreateRobotApplicationRequestBodyRobotSoftwareSuite = exports.CreateRobotApplicationRequestBodyEnvironment = exports.CreateRobotApplicationHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateRobotApplicationHeaders = /** @class */ (function (_super) {
    __extends(CreateRobotApplicationHeaders, _super);
    function CreateRobotApplicationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateRobotApplicationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateRobotApplicationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateRobotApplicationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateRobotApplicationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateRobotApplicationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateRobotApplicationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateRobotApplicationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateRobotApplicationHeaders;
}(utils_1.SpeakeasyBase));
exports.CreateRobotApplicationHeaders = CreateRobotApplicationHeaders;
// CreateRobotApplicationRequestBodyEnvironment
/**
 * The object that contains the Docker image URI for either your robot or simulation applications.
**/
var CreateRobotApplicationRequestBodyEnvironment = /** @class */ (function (_super) {
    __extends(CreateRobotApplicationRequestBodyEnvironment, _super);
    function CreateRobotApplicationRequestBodyEnvironment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], CreateRobotApplicationRequestBodyEnvironment.prototype, "uri", void 0);
    return CreateRobotApplicationRequestBodyEnvironment;
}(utils_1.SpeakeasyBase));
exports.CreateRobotApplicationRequestBodyEnvironment = CreateRobotApplicationRequestBodyEnvironment;
// CreateRobotApplicationRequestBodyRobotSoftwareSuite
/**
 * Information about a robot software suite (ROS distribution).
**/
var CreateRobotApplicationRequestBodyRobotSoftwareSuite = /** @class */ (function (_super) {
    __extends(CreateRobotApplicationRequestBodyRobotSoftwareSuite, _super);
    function CreateRobotApplicationRequestBodyRobotSoftwareSuite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateRobotApplicationRequestBodyRobotSoftwareSuite.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], CreateRobotApplicationRequestBodyRobotSoftwareSuite.prototype, "version", void 0);
    return CreateRobotApplicationRequestBodyRobotSoftwareSuite;
}(utils_1.SpeakeasyBase));
exports.CreateRobotApplicationRequestBodyRobotSoftwareSuite = CreateRobotApplicationRequestBodyRobotSoftwareSuite;
var CreateRobotApplicationRequestBody = /** @class */ (function (_super) {
    __extends(CreateRobotApplicationRequestBody, _super);
    function CreateRobotApplicationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=environment" }),
        __metadata("design:type", CreateRobotApplicationRequestBodyEnvironment)
    ], CreateRobotApplicationRequestBody.prototype, "environment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateRobotApplicationRequestBody.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=robotSoftwareSuite" }),
        __metadata("design:type", CreateRobotApplicationRequestBodyRobotSoftwareSuite)
    ], CreateRobotApplicationRequestBody.prototype, "robotSoftwareSuite", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sources", elemType: shared.SourceConfig }),
        __metadata("design:type", Array)
    ], CreateRobotApplicationRequestBody.prototype, "sources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Object)
    ], CreateRobotApplicationRequestBody.prototype, "tags", void 0);
    return CreateRobotApplicationRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateRobotApplicationRequestBody = CreateRobotApplicationRequestBody;
var CreateRobotApplicationRequest = /** @class */ (function (_super) {
    __extends(CreateRobotApplicationRequest, _super);
    function CreateRobotApplicationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateRobotApplicationHeaders)
    ], CreateRobotApplicationRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateRobotApplicationRequestBody)
    ], CreateRobotApplicationRequest.prototype, "request", void 0);
    return CreateRobotApplicationRequest;
}(utils_1.SpeakeasyBase));
exports.CreateRobotApplicationRequest = CreateRobotApplicationRequest;
var CreateRobotApplicationResponse = /** @class */ (function (_super) {
    __extends(CreateRobotApplicationResponse, _super);
    function CreateRobotApplicationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateRobotApplicationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CreateRobotApplicationResponse)
    ], CreateRobotApplicationResponse.prototype, "createRobotApplicationResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateRobotApplicationResponse.prototype, "idempotentParameterMismatchException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateRobotApplicationResponse.prototype, "internalServerException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateRobotApplicationResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateRobotApplicationResponse.prototype, "limitExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateRobotApplicationResponse.prototype, "resourceAlreadyExistsException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateRobotApplicationResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateRobotApplicationResponse.prototype, "throttlingException", void 0);
    return CreateRobotApplicationResponse;
}(utils_1.SpeakeasyBase));
exports.CreateRobotApplicationResponse = CreateRobotApplicationResponse;
