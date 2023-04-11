import { SpeakeasyBase } from "../../../internal/utils";
import { EksSource } from "./ekssource";
import { ResourceImportStatusTypeEnum } from "./resourceimportstatustypeenum";
import { TerraformSource } from "./terraformsource";
/**
 * Success
 */
export declare class ImportResourcesToDraftAppVersionResponse extends SpeakeasyBase {
    appArn: string;
    appVersion: string;
    eksSources?: EksSource[];
    sourceArns?: string[];
    status: ResourceImportStatusTypeEnum;
    terraformSources?: TerraformSource[];
}
