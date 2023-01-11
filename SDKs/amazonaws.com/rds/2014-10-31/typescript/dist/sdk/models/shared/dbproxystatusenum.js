"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbProxyStatusEnum = void 0;
var DbProxyStatusEnum;
(function (DbProxyStatusEnum) {
    DbProxyStatusEnum["Available"] = "available";
    DbProxyStatusEnum["Modifying"] = "modifying";
    DbProxyStatusEnum["IncompatibleNetwork"] = "incompatible-network";
    DbProxyStatusEnum["InsufficientResourceLimits"] = "insufficient-resource-limits";
    DbProxyStatusEnum["Creating"] = "creating";
    DbProxyStatusEnum["Deleting"] = "deleting";
    DbProxyStatusEnum["Suspended"] = "suspended";
    DbProxyStatusEnum["Suspending"] = "suspending";
    DbProxyStatusEnum["Reactivating"] = "reactivating";
})(DbProxyStatusEnum = exports.DbProxyStatusEnum || (exports.DbProxyStatusEnum = {}));
