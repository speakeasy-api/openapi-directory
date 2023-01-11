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
exports.Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesAction = exports.Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionStatusEnum = exports.Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionRegion = void 0;
var utils_1 = require("../../../internal/utils");
var Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionRegion = /** @class */ (function (_super) {
    __extends(Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionRegion, _super);
    function Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionRegion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=available" }),
        __metadata("design:type", Boolean)
    ], Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionRegion.prototype, "available", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=features" }),
        __metadata("design:type", Object)
    ], Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionRegion.prototype, "features", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionRegion.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sizes" }),
        __metadata("design:type", Object)
    ], Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionRegion.prototype, "sizes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionRegion.prototype, "slug", void 0);
    return Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionRegion;
}(utils_1.SpeakeasyBase));
exports.Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionRegion = Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionRegion;
var Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionStatusEnum;
(function (Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionStatusEnum) {
    Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionStatusEnum["InProgress"] = "in-progress";
    Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionStatusEnum["Completed"] = "completed";
    Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionStatusEnum["Errored"] = "errored";
})(Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionStatusEnum = exports.Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionStatusEnum || (exports.Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionStatusEnum = {}));
var Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesAction = /** @class */ (function (_super) {
    __extends(Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesAction, _super);
    function Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=completed_at" }),
        __metadata("design:type", Date)
    ], Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesAction.prototype, "completedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesAction.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=region" }),
        __metadata("design:type", Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionRegion)
    ], Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesAction.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=region_slug" }),
        __metadata("design:type", Object)
    ], Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesAction.prototype, "regionSlug", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_id" }),
        __metadata("design:type", Number)
    ], Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesAction.prototype, "resourceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesAction.prototype, "resourceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=started_at" }),
        __metadata("design:type", Date)
    ], Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesAction.prototype, "startedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesAction.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesAction.prototype, "type", void 0);
    return Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesAction;
}(utils_1.SpeakeasyBase));
exports.Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesAction = Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesAction;
