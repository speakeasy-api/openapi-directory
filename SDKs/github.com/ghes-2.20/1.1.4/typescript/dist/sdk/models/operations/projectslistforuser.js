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
exports.ProjectsListForUserResponse = exports.ProjectsListForUserRequest = exports.ProjectsListForUser415ApplicationJson = exports.ProjectsListForUserQueryParams = exports.ProjectsListForUserPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ProjectsListForUserPathParams = /** @class */ (function (_super) {
    __extends(ProjectsListForUserPathParams, _super);
    function ProjectsListForUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], ProjectsListForUserPathParams.prototype, "username", void 0);
    return ProjectsListForUserPathParams;
}(utils_1.SpeakeasyBase));
exports.ProjectsListForUserPathParams = ProjectsListForUserPathParams;
var ProjectsListForUserQueryParams = /** @class */ (function (_super) {
    __extends(ProjectsListForUserQueryParams, _super);
    function ProjectsListForUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ProjectsListForUserQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ProjectsListForUserQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", String)
    ], ProjectsListForUserQueryParams.prototype, "state", void 0);
    return ProjectsListForUserQueryParams;
}(utils_1.SpeakeasyBase));
exports.ProjectsListForUserQueryParams = ProjectsListForUserQueryParams;
var ProjectsListForUser415ApplicationJson = /** @class */ (function (_super) {
    __extends(ProjectsListForUser415ApplicationJson, _super);
    function ProjectsListForUser415ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], ProjectsListForUser415ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ProjectsListForUser415ApplicationJson.prototype, "message", void 0);
    return ProjectsListForUser415ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ProjectsListForUser415ApplicationJson = ProjectsListForUser415ApplicationJson;
var ProjectsListForUserRequest = /** @class */ (function (_super) {
    __extends(ProjectsListForUserRequest, _super);
    function ProjectsListForUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ProjectsListForUserPathParams)
    ], ProjectsListForUserRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ProjectsListForUserQueryParams)
    ], ProjectsListForUserRequest.prototype, "queryParams", void 0);
    return ProjectsListForUserRequest;
}(utils_1.SpeakeasyBase));
exports.ProjectsListForUserRequest = ProjectsListForUserRequest;
var ProjectsListForUserResponse = /** @class */ (function (_super) {
    __extends(ProjectsListForUserResponse, _super);
    function ProjectsListForUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ProjectsListForUserResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ProjectsListForUserResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ProjectsListForUserResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.Project }),
        __metadata("design:type", Array)
    ], ProjectsListForUserResponse.prototype, "projects", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ProjectsListForUser415ApplicationJson)
    ], ProjectsListForUserResponse.prototype, "projectsListForUser415ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ValidationError)
    ], ProjectsListForUserResponse.prototype, "validationError", void 0);
    return ProjectsListForUserResponse;
}(utils_1.SpeakeasyBase));
exports.ProjectsListForUserResponse = ProjectsListForUserResponse;
