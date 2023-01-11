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
exports.AssociateClientVpnTargetNetworkResult = exports.AssociateClientVpnTargetNetworkResultStatus = void 0;
var utils_1 = require("../../../internal/utils");
// AssociateClientVpnTargetNetworkResultStatus
/**
 * The current state of the target network association.
**/
var AssociateClientVpnTargetNetworkResultStatus = /** @class */ (function (_super) {
    __extends(AssociateClientVpnTargetNetworkResultStatus, _super);
    function AssociateClientVpnTargetNetworkResultStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AssociateClientVpnTargetNetworkResultStatus.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AssociateClientVpnTargetNetworkResultStatus.prototype, "message", void 0);
    return AssociateClientVpnTargetNetworkResultStatus;
}(utils_1.SpeakeasyBase));
exports.AssociateClientVpnTargetNetworkResultStatus = AssociateClientVpnTargetNetworkResultStatus;
var AssociateClientVpnTargetNetworkResult = /** @class */ (function (_super) {
    __extends(AssociateClientVpnTargetNetworkResult, _super);
    function AssociateClientVpnTargetNetworkResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AssociateClientVpnTargetNetworkResult.prototype, "associationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AssociateClientVpnTargetNetworkResultStatus)
    ], AssociateClientVpnTargetNetworkResult.prototype, "status", void 0);
    return AssociateClientVpnTargetNetworkResult;
}(utils_1.SpeakeasyBase));
exports.AssociateClientVpnTargetNetworkResult = AssociateClientVpnTargetNetworkResult;
