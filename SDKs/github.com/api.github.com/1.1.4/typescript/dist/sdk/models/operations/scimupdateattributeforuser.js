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
exports.ScimUpdateAttributeForUserResponse = exports.ScimUpdateAttributeForUserRequest = exports.ScimUpdateAttributeForUserRequestBody = exports.ScimUpdateAttributeForUserRequestBodyOperations = exports.ScimUpdateAttributeForUserRequestBodyOperationsValue2 = exports.ScimUpdateAttributeForUserRequestBodyOperationsValue1 = exports.ScimUpdateAttributeForUserRequestBodyOperationsOpEnum = exports.ScimUpdateAttributeForUserPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ScimUpdateAttributeForUserPathParams = /** @class */ (function (_super) {
    __extends(ScimUpdateAttributeForUserPathParams, _super);
    function ScimUpdateAttributeForUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], ScimUpdateAttributeForUserPathParams.prototype, "org", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=scim_user_id" }),
        __metadata("design:type", String)
    ], ScimUpdateAttributeForUserPathParams.prototype, "scimUserId", void 0);
    return ScimUpdateAttributeForUserPathParams;
}(utils_1.SpeakeasyBase));
exports.ScimUpdateAttributeForUserPathParams = ScimUpdateAttributeForUserPathParams;
var ScimUpdateAttributeForUserRequestBodyOperationsOpEnum;
(function (ScimUpdateAttributeForUserRequestBodyOperationsOpEnum) {
    ScimUpdateAttributeForUserRequestBodyOperationsOpEnum["Add"] = "add";
    ScimUpdateAttributeForUserRequestBodyOperationsOpEnum["Remove"] = "remove";
    ScimUpdateAttributeForUserRequestBodyOperationsOpEnum["Replace"] = "replace";
})(ScimUpdateAttributeForUserRequestBodyOperationsOpEnum = exports.ScimUpdateAttributeForUserRequestBodyOperationsOpEnum || (exports.ScimUpdateAttributeForUserRequestBodyOperationsOpEnum = {}));
var ScimUpdateAttributeForUserRequestBodyOperationsValue1 = /** @class */ (function (_super) {
    __extends(ScimUpdateAttributeForUserRequestBodyOperationsValue1, _super);
    function ScimUpdateAttributeForUserRequestBodyOperationsValue1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], ScimUpdateAttributeForUserRequestBodyOperationsValue1.prototype, "active", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=externalId" }),
        __metadata("design:type", String)
    ], ScimUpdateAttributeForUserRequestBodyOperationsValue1.prototype, "externalId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=familyName" }),
        __metadata("design:type", String)
    ], ScimUpdateAttributeForUserRequestBodyOperationsValue1.prototype, "familyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=givenName" }),
        __metadata("design:type", String)
    ], ScimUpdateAttributeForUserRequestBodyOperationsValue1.prototype, "givenName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userName" }),
        __metadata("design:type", String)
    ], ScimUpdateAttributeForUserRequestBodyOperationsValue1.prototype, "userName", void 0);
    return ScimUpdateAttributeForUserRequestBodyOperationsValue1;
}(utils_1.SpeakeasyBase));
exports.ScimUpdateAttributeForUserRequestBodyOperationsValue1 = ScimUpdateAttributeForUserRequestBodyOperationsValue1;
var ScimUpdateAttributeForUserRequestBodyOperationsValue2 = /** @class */ (function (_super) {
    __extends(ScimUpdateAttributeForUserRequestBodyOperationsValue2, _super);
    function ScimUpdateAttributeForUserRequestBodyOperationsValue2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=primary" }),
        __metadata("design:type", Boolean)
    ], ScimUpdateAttributeForUserRequestBodyOperationsValue2.prototype, "primary", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ScimUpdateAttributeForUserRequestBodyOperationsValue2.prototype, "value", void 0);
    return ScimUpdateAttributeForUserRequestBodyOperationsValue2;
}(utils_1.SpeakeasyBase));
exports.ScimUpdateAttributeForUserRequestBodyOperationsValue2 = ScimUpdateAttributeForUserRequestBodyOperationsValue2;
var ScimUpdateAttributeForUserRequestBodyOperations = /** @class */ (function (_super) {
    __extends(ScimUpdateAttributeForUserRequestBodyOperations, _super);
    function ScimUpdateAttributeForUserRequestBodyOperations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=op" }),
        __metadata("design:type", String)
    ], ScimUpdateAttributeForUserRequestBodyOperations.prototype, "op", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], ScimUpdateAttributeForUserRequestBodyOperations.prototype, "path", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", Object)
    ], ScimUpdateAttributeForUserRequestBodyOperations.prototype, "value", void 0);
    return ScimUpdateAttributeForUserRequestBodyOperations;
}(utils_1.SpeakeasyBase));
exports.ScimUpdateAttributeForUserRequestBodyOperations = ScimUpdateAttributeForUserRequestBodyOperations;
var ScimUpdateAttributeForUserRequestBody = /** @class */ (function (_super) {
    __extends(ScimUpdateAttributeForUserRequestBody, _super);
    function ScimUpdateAttributeForUserRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Operations", elemType: ScimUpdateAttributeForUserRequestBodyOperations }),
        __metadata("design:type", Array)
    ], ScimUpdateAttributeForUserRequestBody.prototype, "operations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schemas" }),
        __metadata("design:type", Array)
    ], ScimUpdateAttributeForUserRequestBody.prototype, "schemas", void 0);
    return ScimUpdateAttributeForUserRequestBody;
}(utils_1.SpeakeasyBase));
exports.ScimUpdateAttributeForUserRequestBody = ScimUpdateAttributeForUserRequestBody;
var ScimUpdateAttributeForUserRequest = /** @class */ (function (_super) {
    __extends(ScimUpdateAttributeForUserRequest, _super);
    function ScimUpdateAttributeForUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ScimUpdateAttributeForUserPathParams)
    ], ScimUpdateAttributeForUserRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ScimUpdateAttributeForUserRequestBody)
    ], ScimUpdateAttributeForUserRequest.prototype, "request", void 0);
    return ScimUpdateAttributeForUserRequest;
}(utils_1.SpeakeasyBase));
exports.ScimUpdateAttributeForUserRequest = ScimUpdateAttributeForUserRequest;
var ScimUpdateAttributeForUserResponse = /** @class */ (function (_super) {
    __extends(ScimUpdateAttributeForUserResponse, _super);
    function ScimUpdateAttributeForUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ScimUpdateAttributeForUserResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ScimUpdateAttributeForUserResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BasicError)
    ], ScimUpdateAttributeForUserResponse.prototype, "basicError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ScimError)
    ], ScimUpdateAttributeForUserResponse.prototype, "scimError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ScimUser)
    ], ScimUpdateAttributeForUserResponse.prototype, "scimUser", void 0);
    return ScimUpdateAttributeForUserResponse;
}(utils_1.SpeakeasyBase));
exports.ScimUpdateAttributeForUserResponse = ScimUpdateAttributeForUserResponse;
