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
exports.UpdateProjectResponse = exports.UpdateProjectRequest = exports.UpdateProject401ApplicationJson = exports.UpdateProjectRequestBodyInput = exports.UpdateProjectRequestBodyEnvironmentEnum = exports.UpdateProjectPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateProjectPathParams = /** @class */ (function (_super) {
    __extends(UpdateProjectPathParams, _super);
    function UpdateProjectPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=project_id" }),
        __metadata("design:type", String)
    ], UpdateProjectPathParams.prototype, "projectId", void 0);
    return UpdateProjectPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateProjectPathParams = UpdateProjectPathParams;
var UpdateProjectRequestBodyEnvironmentEnum;
(function (UpdateProjectRequestBodyEnvironmentEnum) {
    UpdateProjectRequestBodyEnvironmentEnum["Development"] = "Development";
    UpdateProjectRequestBodyEnvironmentEnum["Staging"] = "Staging";
    UpdateProjectRequestBodyEnvironmentEnum["Production"] = "Production";
})(UpdateProjectRequestBodyEnvironmentEnum = exports.UpdateProjectRequestBodyEnvironmentEnum || (exports.UpdateProjectRequestBodyEnvironmentEnum = {}));
var UpdateProjectRequestBodyInput = /** @class */ (function (_super) {
    __extends(UpdateProjectRequestBodyInput, _super);
    function UpdateProjectRequestBodyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateProjectRequestBodyInput.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=environment" }),
        __metadata("design:type", String)
    ], UpdateProjectRequestBodyInput.prototype, "environment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_default" }),
        __metadata("design:type", Boolean)
    ], UpdateProjectRequestBodyInput.prototype, "isDefault", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateProjectRequestBodyInput.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=purpose" }),
        __metadata("design:type", String)
    ], UpdateProjectRequestBodyInput.prototype, "purpose", void 0);
    return UpdateProjectRequestBodyInput;
}(utils_1.SpeakeasyBase));
exports.UpdateProjectRequestBodyInput = UpdateProjectRequestBodyInput;
var UpdateProject401ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateProject401ApplicationJson, _super);
    function UpdateProject401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateProject401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], UpdateProject401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], UpdateProject401ApplicationJson.prototype, "requestId", void 0);
    return UpdateProject401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateProject401ApplicationJson = UpdateProject401ApplicationJson;
var UpdateProjectRequest = /** @class */ (function (_super) {
    __extends(UpdateProjectRequest, _super);
    function UpdateProjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateProjectPathParams)
    ], UpdateProjectRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateProjectRequestBodyInput)
    ], UpdateProjectRequest.prototype, "request", void 0);
    return UpdateProjectRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateProjectRequest = UpdateProjectRequest;
var UpdateProjectResponse = /** @class */ (function (_super) {
    __extends(UpdateProjectResponse, _super);
    function UpdateProjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateProjectResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateProjectResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateProjectResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateProjectResponse.prototype, "updateProject200ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateProject401ApplicationJson)
    ], UpdateProjectResponse.prototype, "updateProject401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], UpdateProjectResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return UpdateProjectResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateProjectResponse = UpdateProjectResponse;
