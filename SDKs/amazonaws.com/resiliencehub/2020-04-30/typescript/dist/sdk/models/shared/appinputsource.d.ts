import { SpeakeasyBase } from "../../../internal/utils";
import { EksSourceClusterNamespace } from "./ekssourceclusternamespace";
import { ResourceMappingTypeEnum } from "./resourcemappingtypeenum";
import { TerraformSource } from "./terraformsource";
/**
 * The list of Resilience Hub application input sources.
 */
export declare class AppInputSource extends SpeakeasyBase {
    eksSourceClusterNamespace?: EksSourceClusterNamespace;
    importType: ResourceMappingTypeEnum;
    resourceCount?: number;
    sourceArn?: string;
    sourceName?: string;
    terraformSource?: TerraformSource;
}
