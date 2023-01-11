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
exports.AssociateInstanceEventWindowResult = exports.AssociateInstanceEventWindowResultInstanceEventWindow = exports.AssociateInstanceEventWindowResultInstanceEventWindowAssociationTarget = void 0;
var utils_1 = require("../../../internal/utils");
// AssociateInstanceEventWindowResultInstanceEventWindowAssociationTarget
/**
 * One or more targets associated with the event window.
**/
var AssociateInstanceEventWindowResultInstanceEventWindowAssociationTarget = /** @class */ (function (_super) {
    __extends(AssociateInstanceEventWindowResultInstanceEventWindowAssociationTarget, _super);
    function AssociateInstanceEventWindowResultInstanceEventWindowAssociationTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AssociateInstanceEventWindowResultInstanceEventWindowAssociationTarget.prototype, "dedicatedHostIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AssociateInstanceEventWindowResultInstanceEventWindowAssociationTarget.prototype, "instanceIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AssociateInstanceEventWindowResultInstanceEventWindowAssociationTarget.prototype, "tags", void 0);
    return AssociateInstanceEventWindowResultInstanceEventWindowAssociationTarget;
}(utils_1.SpeakeasyBase));
exports.AssociateInstanceEventWindowResultInstanceEventWindowAssociationTarget = AssociateInstanceEventWindowResultInstanceEventWindowAssociationTarget;
// AssociateInstanceEventWindowResultInstanceEventWindow
/**
 * Information about the event window.
**/
var AssociateInstanceEventWindowResultInstanceEventWindow = /** @class */ (function (_super) {
    __extends(AssociateInstanceEventWindowResultInstanceEventWindow, _super);
    function AssociateInstanceEventWindowResultInstanceEventWindow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AssociateInstanceEventWindowResultInstanceEventWindowAssociationTarget)
    ], AssociateInstanceEventWindowResultInstanceEventWindow.prototype, "associationTarget", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AssociateInstanceEventWindowResultInstanceEventWindow.prototype, "cronExpression", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AssociateInstanceEventWindowResultInstanceEventWindow.prototype, "instanceEventWindowId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AssociateInstanceEventWindowResultInstanceEventWindow.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AssociateInstanceEventWindowResultInstanceEventWindow.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AssociateInstanceEventWindowResultInstanceEventWindow.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AssociateInstanceEventWindowResultInstanceEventWindow.prototype, "timeRanges", void 0);
    return AssociateInstanceEventWindowResultInstanceEventWindow;
}(utils_1.SpeakeasyBase));
exports.AssociateInstanceEventWindowResultInstanceEventWindow = AssociateInstanceEventWindowResultInstanceEventWindow;
var AssociateInstanceEventWindowResult = /** @class */ (function (_super) {
    __extends(AssociateInstanceEventWindowResult, _super);
    function AssociateInstanceEventWindowResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AssociateInstanceEventWindowResultInstanceEventWindow)
    ], AssociateInstanceEventWindowResult.prototype, "instanceEventWindow", void 0);
    return AssociateInstanceEventWindowResult;
}(utils_1.SpeakeasyBase));
exports.AssociateInstanceEventWindowResult = AssociateInstanceEventWindowResult;
