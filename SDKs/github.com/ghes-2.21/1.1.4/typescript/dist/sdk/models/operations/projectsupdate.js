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
exports.ProjectsUpdateResponse = exports.ProjectsUpdateRequest = exports.ProjectsUpdate403ApplicationJson = exports.ProjectsUpdateRequestBody = exports.ProjectsUpdateRequestBodyOrganizationPermissionEnum = exports.ProjectsUpdatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ProjectsUpdatePathParams = /** @class */ (function (_super) {
    __extends(ProjectsUpdatePathParams, _super);
    function ProjectsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=project_id" }),
        __metadata("design:type", Number)
    ], ProjectsUpdatePathParams.prototype, "projectId", void 0);
    return ProjectsUpdatePathParams;
}(utils_1.SpeakeasyBase));
exports.ProjectsUpdatePathParams = ProjectsUpdatePathParams;
var ProjectsUpdateRequestBodyOrganizationPermissionEnum;
(function (ProjectsUpdateRequestBodyOrganizationPermissionEnum) {
    ProjectsUpdateRequestBodyOrganizationPermissionEnum["Read"] = "read";
    ProjectsUpdateRequestBodyOrganizationPermissionEnum["Write"] = "write";
    ProjectsUpdateRequestBodyOrganizationPermissionEnum["Admin"] = "admin";
    ProjectsUpdateRequestBodyOrganizationPermissionEnum["None"] = "none";
})(ProjectsUpdateRequestBodyOrganizationPermissionEnum = exports.ProjectsUpdateRequestBodyOrganizationPermissionEnum || (exports.ProjectsUpdateRequestBodyOrganizationPermissionEnum = {}));
var ProjectsUpdateRequestBody = /** @class */ (function (_super) {
    __extends(ProjectsUpdateRequestBody, _super);
    function ProjectsUpdateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], ProjectsUpdateRequestBody.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ProjectsUpdateRequestBody.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=organization_permission" }),
        __metadata("design:type", String)
    ], ProjectsUpdateRequestBody.prototype, "organizationPermission", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=private" }),
        __metadata("design:type", Boolean)
    ], ProjectsUpdateRequestBody.prototype, "private", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], ProjectsUpdateRequestBody.prototype, "state", void 0);
    return ProjectsUpdateRequestBody;
}(utils_1.SpeakeasyBase));
exports.ProjectsUpdateRequestBody = ProjectsUpdateRequestBody;
var ProjectsUpdate403ApplicationJson = /** @class */ (function (_super) {
    __extends(ProjectsUpdate403ApplicationJson, _super);
    function ProjectsUpdate403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], ProjectsUpdate403ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errors" }),
        __metadata("design:type", Array)
    ], ProjectsUpdate403ApplicationJson.prototype, "errors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ProjectsUpdate403ApplicationJson.prototype, "message", void 0);
    return ProjectsUpdate403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ProjectsUpdate403ApplicationJson = ProjectsUpdate403ApplicationJson;
var ProjectsUpdateRequest = /** @class */ (function (_super) {
    __extends(ProjectsUpdateRequest, _super);
    function ProjectsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ProjectsUpdatePathParams)
    ], ProjectsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ProjectsUpdateRequestBody)
    ], ProjectsUpdateRequest.prototype, "request", void 0);
    return ProjectsUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.ProjectsUpdateRequest = ProjectsUpdateRequest;
var ProjectsUpdateResponse = /** @class */ (function (_super) {
    __extends(ProjectsUpdateResponse, _super);
    function ProjectsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ProjectsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ProjectsUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BasicError)
    ], ProjectsUpdateResponse.prototype, "basicError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Project)
    ], ProjectsUpdateResponse.prototype, "project", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ProjectsUpdate403ApplicationJson)
    ], ProjectsUpdateResponse.prototype, "projectsUpdate403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ValidationErrorSimple)
    ], ProjectsUpdateResponse.prototype, "validationErrorSimple", void 0);
    return ProjectsUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.ProjectsUpdateResponse = ProjectsUpdateResponse;
