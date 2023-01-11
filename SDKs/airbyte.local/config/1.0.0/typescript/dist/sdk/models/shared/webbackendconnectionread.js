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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebBackendConnectionRead = void 0;
var utils_1 = require("../../../internal/utils");
var destinationread_1 = require("./destinationread");
var jobstatusenum_1 = require("./jobstatusenum");
var namespacedefinitiontypeenum_1 = require("./namespacedefinitiontypeenum");
var operationread_1 = require("./operationread");
var resourcerequirements_1 = require("./resourcerequirements");
var connectionschedule_1 = require("./connectionschedule");
var sourceread_1 = require("./sourceread");
var connectionstatusenum_1 = require("./connectionstatusenum");
var airbytecatalog_1 = require("./airbytecatalog");
var WebBackendConnectionRead = /** @class */ (function (_super) {
    __extends(WebBackendConnectionRead, _super);
    function WebBackendConnectionRead() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connectionId" }),
        __metadata("design:type", String)
    ], WebBackendConnectionRead.prototype, "connectionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=destination" }),
        __metadata("design:type", destinationread_1.DestinationRead)
    ], WebBackendConnectionRead.prototype, "destination", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=destinationId" }),
        __metadata("design:type", String)
    ], WebBackendConnectionRead.prototype, "destinationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isSyncing" }),
        __metadata("design:type", Boolean)
    ], WebBackendConnectionRead.prototype, "isSyncing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latestSyncJobCreatedAt" }),
        __metadata("design:type", Number)
    ], WebBackendConnectionRead.prototype, "latestSyncJobCreatedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latestSyncJobStatus" }),
        __metadata("design:type", String)
    ], WebBackendConnectionRead.prototype, "latestSyncJobStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], WebBackendConnectionRead.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=namespaceDefinition" }),
        __metadata("design:type", String)
    ], WebBackendConnectionRead.prototype, "namespaceDefinition", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=namespaceFormat" }),
        __metadata("design:type", String)
    ], WebBackendConnectionRead.prototype, "namespaceFormat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=operationIds" }),
        __metadata("design:type", Array)
    ], WebBackendConnectionRead.prototype, "operationIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=operations", elemType: operationread_1.OperationRead }),
        __metadata("design:type", Array)
    ], WebBackendConnectionRead.prototype, "operations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prefix" }),
        __metadata("design:type", String)
    ], WebBackendConnectionRead.prototype, "prefix", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resourceRequirements" }),
        __metadata("design:type", resourcerequirements_1.ResourceRequirements)
    ], WebBackendConnectionRead.prototype, "resourceRequirements", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schedule" }),
        __metadata("design:type", connectionschedule_1.ConnectionSchedule)
    ], WebBackendConnectionRead.prototype, "schedule", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", sourceread_1.SourceRead)
    ], WebBackendConnectionRead.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sourceId" }),
        __metadata("design:type", String)
    ], WebBackendConnectionRead.prototype, "sourceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], WebBackendConnectionRead.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=syncCatalog" }),
        __metadata("design:type", airbytecatalog_1.AirbyteCatalog)
    ], WebBackendConnectionRead.prototype, "syncCatalog", void 0);
    return WebBackendConnectionRead;
}(utils_1.SpeakeasyBase));
exports.WebBackendConnectionRead = WebBackendConnectionRead;
