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
exports.ValidateAppSpecResponse = exports.ValidateAppSpecRequest = exports.ValidateAppSpec401ApplicationJson = exports.ValidateAppSpec200ApplicationJson = exports.ValidateAppSpecRequestBody = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ValidateAppSpecRequestBody = /** @class */ (function (_super) {
    __extends(ValidateAppSpecRequestBody, _super);
    function ValidateAppSpecRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=app_id" }),
        __metadata("design:type", String)
    ], ValidateAppSpecRequestBody.prototype, "appId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=spec" }),
        __metadata("design:type", shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec)
    ], ValidateAppSpecRequestBody.prototype, "spec", void 0);
    return ValidateAppSpecRequestBody;
}(utils_1.SpeakeasyBase));
exports.ValidateAppSpecRequestBody = ValidateAppSpecRequestBody;
var ValidateAppSpec200ApplicationJson = /** @class */ (function (_super) {
    __extends(ValidateAppSpec200ApplicationJson, _super);
    function ValidateAppSpec200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=app_cost" }),
        __metadata("design:type", Number)
    ], ValidateAppSpec200ApplicationJson.prototype, "appCost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=app_is_static" }),
        __metadata("design:type", Boolean)
    ], ValidateAppSpec200ApplicationJson.prototype, "appIsStatic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=app_name_available" }),
        __metadata("design:type", Boolean)
    ], ValidateAppSpec200ApplicationJson.prototype, "appNameAvailable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=app_name_suggestion" }),
        __metadata("design:type", String)
    ], ValidateAppSpec200ApplicationJson.prototype, "appNameSuggestion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=app_tier_downgrade_cost" }),
        __metadata("design:type", Number)
    ], ValidateAppSpec200ApplicationJson.prototype, "appTierDowngradeCost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=existing_static_apps" }),
        __metadata("design:type", String)
    ], ValidateAppSpec200ApplicationJson.prototype, "existingStaticApps", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=spec" }),
        __metadata("design:type", shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec)
    ], ValidateAppSpec200ApplicationJson.prototype, "spec", void 0);
    return ValidateAppSpec200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ValidateAppSpec200ApplicationJson = ValidateAppSpec200ApplicationJson;
var ValidateAppSpec401ApplicationJson = /** @class */ (function (_super) {
    __extends(ValidateAppSpec401ApplicationJson, _super);
    function ValidateAppSpec401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ValidateAppSpec401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ValidateAppSpec401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], ValidateAppSpec401ApplicationJson.prototype, "requestId", void 0);
    return ValidateAppSpec401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ValidateAppSpec401ApplicationJson = ValidateAppSpec401ApplicationJson;
var ValidateAppSpecRequest = /** @class */ (function (_super) {
    __extends(ValidateAppSpecRequest, _super);
    function ValidateAppSpecRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ValidateAppSpecRequestBody)
    ], ValidateAppSpecRequest.prototype, "request", void 0);
    return ValidateAppSpecRequest;
}(utils_1.SpeakeasyBase));
exports.ValidateAppSpecRequest = ValidateAppSpecRequest;
var ValidateAppSpecResponse = /** @class */ (function (_super) {
    __extends(ValidateAppSpecResponse, _super);
    function ValidateAppSpecResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ValidateAppSpecResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ValidateAppSpecResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ValidateAppSpecResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ValidateAppSpec200ApplicationJson)
    ], ValidateAppSpecResponse.prototype, "validateAppSpec200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ValidateAppSpec401ApplicationJson)
    ], ValidateAppSpecResponse.prototype, "validateAppSpec401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], ValidateAppSpecResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return ValidateAppSpecResponse;
}(utils_1.SpeakeasyBase));
exports.ValidateAppSpecResponse = ValidateAppSpecResponse;
