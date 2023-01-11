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
exports.ProjectsCreateCardResponse = exports.ProjectsCreateCardRequest = exports.ProjectsCreateCard503ApplicationJson = exports.ProjectsCreateCard503ApplicationJsonErrors = exports.ProjectsCreateCardRequestBody2 = exports.ProjectsCreateCardRequestBody1 = exports.ProjectsCreateCardPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ProjectsCreateCardPathParams = /** @class */ (function (_super) {
    __extends(ProjectsCreateCardPathParams, _super);
    function ProjectsCreateCardPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=column_id" }),
        __metadata("design:type", Number)
    ], ProjectsCreateCardPathParams.prototype, "columnId", void 0);
    return ProjectsCreateCardPathParams;
}(utils_1.SpeakeasyBase));
exports.ProjectsCreateCardPathParams = ProjectsCreateCardPathParams;
var ProjectsCreateCardRequestBody1 = /** @class */ (function (_super) {
    __extends(ProjectsCreateCardRequestBody1, _super);
    function ProjectsCreateCardRequestBody1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=note" }),
        __metadata("design:type", String)
    ], ProjectsCreateCardRequestBody1.prototype, "note", void 0);
    return ProjectsCreateCardRequestBody1;
}(utils_1.SpeakeasyBase));
exports.ProjectsCreateCardRequestBody1 = ProjectsCreateCardRequestBody1;
var ProjectsCreateCardRequestBody2 = /** @class */ (function (_super) {
    __extends(ProjectsCreateCardRequestBody2, _super);
    function ProjectsCreateCardRequestBody2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=content_id" }),
        __metadata("design:type", Number)
    ], ProjectsCreateCardRequestBody2.prototype, "contentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=content_type" }),
        __metadata("design:type", String)
    ], ProjectsCreateCardRequestBody2.prototype, "contentType", void 0);
    return ProjectsCreateCardRequestBody2;
}(utils_1.SpeakeasyBase));
exports.ProjectsCreateCardRequestBody2 = ProjectsCreateCardRequestBody2;
var ProjectsCreateCard503ApplicationJsonErrors = /** @class */ (function (_super) {
    __extends(ProjectsCreateCard503ApplicationJsonErrors, _super);
    function ProjectsCreateCard503ApplicationJsonErrors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], ProjectsCreateCard503ApplicationJsonErrors.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ProjectsCreateCard503ApplicationJsonErrors.prototype, "message", void 0);
    return ProjectsCreateCard503ApplicationJsonErrors;
}(utils_1.SpeakeasyBase));
exports.ProjectsCreateCard503ApplicationJsonErrors = ProjectsCreateCard503ApplicationJsonErrors;
var ProjectsCreateCard503ApplicationJson = /** @class */ (function (_super) {
    __extends(ProjectsCreateCard503ApplicationJson, _super);
    function ProjectsCreateCard503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], ProjectsCreateCard503ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], ProjectsCreateCard503ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errors", elemType: ProjectsCreateCard503ApplicationJsonErrors }),
        __metadata("design:type", Array)
    ], ProjectsCreateCard503ApplicationJson.prototype, "errors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ProjectsCreateCard503ApplicationJson.prototype, "message", void 0);
    return ProjectsCreateCard503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ProjectsCreateCard503ApplicationJson = ProjectsCreateCard503ApplicationJson;
var ProjectsCreateCardRequest = /** @class */ (function (_super) {
    __extends(ProjectsCreateCardRequest, _super);
    function ProjectsCreateCardRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ProjectsCreateCardPathParams)
    ], ProjectsCreateCardRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], ProjectsCreateCardRequest.prototype, "request", void 0);
    return ProjectsCreateCardRequest;
}(utils_1.SpeakeasyBase));
exports.ProjectsCreateCardRequest = ProjectsCreateCardRequest;
var ProjectsCreateCardResponse = /** @class */ (function (_super) {
    __extends(ProjectsCreateCardResponse, _super);
    function ProjectsCreateCardResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ProjectsCreateCardResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ProjectsCreateCardResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BasicError)
    ], ProjectsCreateCardResponse.prototype, "basicError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ProjectCard)
    ], ProjectsCreateCardResponse.prototype, "projectCard", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ProjectsCreateCardResponse.prototype, "projectsCreateCard422ApplicationJSONOneOf", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ProjectsCreateCard503ApplicationJson)
    ], ProjectsCreateCardResponse.prototype, "projectsCreateCard503ApplicationJSONObject", void 0);
    return ProjectsCreateCardResponse;
}(utils_1.SpeakeasyBase));
exports.ProjectsCreateCardResponse = ProjectsCreateCardResponse;
