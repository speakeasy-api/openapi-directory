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
exports.TasksUpdateResponse = exports.TasksUpdateRequest = exports.TasksUpdateSecurity = exports.TasksUpdateQueryParams = exports.TasksUpdatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var TasksUpdatePathParams = /** @class */ (function (_super) {
    __extends(TasksUpdatePathParams, _super);
    function TasksUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], TasksUpdatePathParams.prototype, "id", void 0);
    return TasksUpdatePathParams;
}(utils_1.SpeakeasyBase));
exports.TasksUpdatePathParams = TasksUpdatePathParams;
var TasksUpdateQueryParams = /** @class */ (function (_super) {
    __extends(TasksUpdateQueryParams, _super);
    function TasksUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=assignee_group" }),
        __metadata("design:type", Number)
    ], TasksUpdateQueryParams.prototype, "assigneeGroup", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=assignee_user" }),
        __metadata("design:type", Number)
    ], TasksUpdateQueryParams.prototype, "assigneeUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=category" }),
        __metadata("design:type", Number)
    ], TasksUpdateQueryParams.prototype, "category", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=due_at_date" }),
        __metadata("design:type", String)
    ], TasksUpdateQueryParams.prototype, "dueAtDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=due_at_range" }),
        __metadata("design:type", String)
    ], TasksUpdateQueryParams.prototype, "dueAtRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=due_at_since" }),
        __metadata("design:type", String)
    ], TasksUpdateQueryParams.prototype, "dueAtSince", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=due_at_unknown" }),
        __metadata("design:type", String)
    ], TasksUpdateQueryParams.prototype, "dueAtUnknown", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=since" }),
        __metadata("design:type", String)
    ], TasksUpdateQueryParams.prototype, "since", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", Number)
    ], TasksUpdateQueryParams.prototype, "status", void 0);
    return TasksUpdateQueryParams;
}(utils_1.SpeakeasyBase));
exports.TasksUpdateQueryParams = TasksUpdateQueryParams;
var TasksUpdateSecurity = /** @class */ (function (_super) {
    __extends(TasksUpdateSecurity, _super);
    function TasksUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeDrchronoOauth2)
    ], TasksUpdateSecurity.prototype, "drchronoOauth2", void 0);
    return TasksUpdateSecurity;
}(utils_1.SpeakeasyBase));
exports.TasksUpdateSecurity = TasksUpdateSecurity;
var TasksUpdateRequest = /** @class */ (function (_super) {
    __extends(TasksUpdateRequest, _super);
    function TasksUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TasksUpdatePathParams)
    ], TasksUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TasksUpdateQueryParams)
    ], TasksUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TasksUpdateSecurity)
    ], TasksUpdateRequest.prototype, "security", void 0);
    return TasksUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.TasksUpdateRequest = TasksUpdateRequest;
var TasksUpdateResponse = /** @class */ (function (_super) {
    __extends(TasksUpdateResponse, _super);
    function TasksUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], TasksUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], TasksUpdateResponse.prototype, "statusCode", void 0);
    return TasksUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.TasksUpdateResponse = TasksUpdateResponse;
