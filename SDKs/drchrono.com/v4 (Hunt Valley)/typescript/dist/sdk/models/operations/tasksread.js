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
exports.TasksReadResponse = exports.TasksReadRequest = exports.TasksReadSecurity = exports.TasksReadQueryParams = exports.TasksReadPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var TasksReadPathParams = /** @class */ (function (_super) {
    __extends(TasksReadPathParams, _super);
    function TasksReadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], TasksReadPathParams.prototype, "id", void 0);
    return TasksReadPathParams;
}(utils_1.SpeakeasyBase));
exports.TasksReadPathParams = TasksReadPathParams;
var TasksReadQueryParams = /** @class */ (function (_super) {
    __extends(TasksReadQueryParams, _super);
    function TasksReadQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=assignee_group" }),
        __metadata("design:type", Number)
    ], TasksReadQueryParams.prototype, "assigneeGroup", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=assignee_user" }),
        __metadata("design:type", Number)
    ], TasksReadQueryParams.prototype, "assigneeUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=category" }),
        __metadata("design:type", Number)
    ], TasksReadQueryParams.prototype, "category", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=due_at_date" }),
        __metadata("design:type", String)
    ], TasksReadQueryParams.prototype, "dueAtDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=due_at_range" }),
        __metadata("design:type", String)
    ], TasksReadQueryParams.prototype, "dueAtRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=due_at_since" }),
        __metadata("design:type", String)
    ], TasksReadQueryParams.prototype, "dueAtSince", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=due_at_unknown" }),
        __metadata("design:type", String)
    ], TasksReadQueryParams.prototype, "dueAtUnknown", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=since" }),
        __metadata("design:type", String)
    ], TasksReadQueryParams.prototype, "since", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", Number)
    ], TasksReadQueryParams.prototype, "status", void 0);
    return TasksReadQueryParams;
}(utils_1.SpeakeasyBase));
exports.TasksReadQueryParams = TasksReadQueryParams;
var TasksReadSecurity = /** @class */ (function (_super) {
    __extends(TasksReadSecurity, _super);
    function TasksReadSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeDrchronoOauth2)
    ], TasksReadSecurity.prototype, "drchronoOauth2", void 0);
    return TasksReadSecurity;
}(utils_1.SpeakeasyBase));
exports.TasksReadSecurity = TasksReadSecurity;
var TasksReadRequest = /** @class */ (function (_super) {
    __extends(TasksReadRequest, _super);
    function TasksReadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TasksReadPathParams)
    ], TasksReadRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TasksReadQueryParams)
    ], TasksReadRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TasksReadSecurity)
    ], TasksReadRequest.prototype, "security", void 0);
    return TasksReadRequest;
}(utils_1.SpeakeasyBase));
exports.TasksReadRequest = TasksReadRequest;
var TasksReadResponse = /** @class */ (function (_super) {
    __extends(TasksReadResponse, _super);
    function TasksReadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], TasksReadResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], TasksReadResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Task)
    ], TasksReadResponse.prototype, "task", void 0);
    return TasksReadResponse;
}(utils_1.SpeakeasyBase));
exports.TasksReadResponse = TasksReadResponse;
