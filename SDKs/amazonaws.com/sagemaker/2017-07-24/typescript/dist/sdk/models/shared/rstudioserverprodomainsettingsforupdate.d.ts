import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceSpec } from "./resourcespec";
/**
 * A collection of settings that update the current configuration for the <code>RStudioServerPro</code> Domain-level app.
 */
export declare class RStudioServerProDomainSettingsForUpdate extends SpeakeasyBase {
    /**
     * Specifies the ARN's of a SageMaker image and SageMaker image version, and the instance type that the version runs on.
     */
    defaultResourceSpec?: ResourceSpec;
    domainExecutionRoleArn: string;
    rStudioConnectUrl?: string;
    rStudioPackageManagerUrl?: string;
}
