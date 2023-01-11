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
exports.DeleteLocalGatewayRouteResult = exports.DeleteLocalGatewayRouteResultRoute = void 0;
var utils_1 = require("../../../internal/utils");
// DeleteLocalGatewayRouteResultRoute
/**
 * Information about the route.
**/
var DeleteLocalGatewayRouteResultRoute = /** @class */ (function (_super) {
    __extends(DeleteLocalGatewayRouteResultRoute, _super);
    function DeleteLocalGatewayRouteResultRoute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteLocalGatewayRouteResultRoute.prototype, "destinationCidrBlock", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteLocalGatewayRouteResultRoute.prototype, "localGatewayRouteTableArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteLocalGatewayRouteResultRoute.prototype, "localGatewayRouteTableId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteLocalGatewayRouteResultRoute.prototype, "localGatewayVirtualInterfaceGroupId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteLocalGatewayRouteResultRoute.prototype, "ownerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteLocalGatewayRouteResultRoute.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteLocalGatewayRouteResultRoute.prototype, "type", void 0);
    return DeleteLocalGatewayRouteResultRoute;
}(utils_1.SpeakeasyBase));
exports.DeleteLocalGatewayRouteResultRoute = DeleteLocalGatewayRouteResultRoute;
var DeleteLocalGatewayRouteResult = /** @class */ (function (_super) {
    __extends(DeleteLocalGatewayRouteResult, _super);
    function DeleteLocalGatewayRouteResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteLocalGatewayRouteResultRoute)
    ], DeleteLocalGatewayRouteResult.prototype, "route", void 0);
    return DeleteLocalGatewayRouteResult;
}(utils_1.SpeakeasyBase));
exports.DeleteLocalGatewayRouteResult = DeleteLocalGatewayRouteResult;
