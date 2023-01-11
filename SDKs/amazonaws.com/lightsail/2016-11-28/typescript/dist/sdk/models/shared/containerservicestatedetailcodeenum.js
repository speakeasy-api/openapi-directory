"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerServiceStateDetailCodeEnum = void 0;
var ContainerServiceStateDetailCodeEnum;
(function (ContainerServiceStateDetailCodeEnum) {
    ContainerServiceStateDetailCodeEnum["CreatingSystemResources"] = "CREATING_SYSTEM_RESOURCES";
    ContainerServiceStateDetailCodeEnum["CreatingNetworkInfrastructure"] = "CREATING_NETWORK_INFRASTRUCTURE";
    ContainerServiceStateDetailCodeEnum["ProvisioningCertificate"] = "PROVISIONING_CERTIFICATE";
    ContainerServiceStateDetailCodeEnum["ProvisioningService"] = "PROVISIONING_SERVICE";
    ContainerServiceStateDetailCodeEnum["CreatingDeployment"] = "CREATING_DEPLOYMENT";
    ContainerServiceStateDetailCodeEnum["EvaluatingHealthCheck"] = "EVALUATING_HEALTH_CHECK";
    ContainerServiceStateDetailCodeEnum["ActivatingDeployment"] = "ACTIVATING_DEPLOYMENT";
    ContainerServiceStateDetailCodeEnum["CertificateLimitExceeded"] = "CERTIFICATE_LIMIT_EXCEEDED";
    ContainerServiceStateDetailCodeEnum["UnknownError"] = "UNKNOWN_ERROR";
})(ContainerServiceStateDetailCodeEnum = exports.ContainerServiceStateDetailCodeEnum || (exports.ContainerServiceStateDetailCodeEnum = {}));
