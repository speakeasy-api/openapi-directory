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
exports.ActionTypeDeclaration = void 0;
var utils_1 = require("../../../internal/utils");
var actiontypeexecutor_1 = require("./actiontypeexecutor");
var actiontypeidentifier_1 = require("./actiontypeidentifier");
var actiontypeartifactdetails_1 = require("./actiontypeartifactdetails");
var actiontypepermissions_1 = require("./actiontypepermissions");
var actiontypeurls_1 = require("./actiontypeurls");
// ActionTypeDeclaration
/**
 * The parameters for the action type definition that are provided when the action type is created or updated.
**/
var ActionTypeDeclaration = /** @class */ (function (_super) {
    __extends(ActionTypeDeclaration, _super);
    function ActionTypeDeclaration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ActionTypeDeclaration.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=executor" }),
        __metadata("design:type", actiontypeexecutor_1.ActionTypeExecutor)
    ], ActionTypeDeclaration.prototype, "executor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", actiontypeidentifier_1.ActionTypeIdentifier)
    ], ActionTypeDeclaration.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=inputArtifactDetails" }),
        __metadata("design:type", actiontypeartifactdetails_1.ActionTypeArtifactDetails)
    ], ActionTypeDeclaration.prototype, "inputArtifactDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=outputArtifactDetails" }),
        __metadata("design:type", actiontypeartifactdetails_1.ActionTypeArtifactDetails)
    ], ActionTypeDeclaration.prototype, "outputArtifactDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=permissions" }),
        __metadata("design:type", actiontypepermissions_1.ActionTypePermissions)
    ], ActionTypeDeclaration.prototype, "permissions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=properties" }),
        __metadata("design:type", Object)
    ], ActionTypeDeclaration.prototype, "properties", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=urls" }),
        __metadata("design:type", actiontypeurls_1.ActionTypeUrls)
    ], ActionTypeDeclaration.prototype, "urls", void 0);
    return ActionTypeDeclaration;
}(utils_1.SpeakeasyBase));
exports.ActionTypeDeclaration = ActionTypeDeclaration;
