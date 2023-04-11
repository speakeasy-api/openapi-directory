import { SpeakeasyBase } from "../../../internal/utils";
import { ArchitectureEnum } from "./architectureenum";
import { RuntimeEnum } from "./runtimeenum";
/**
 * Details about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>.
 */
export declare class LayerVersionsListItem extends SpeakeasyBase {
    compatibleArchitectures?: ArchitectureEnum[];
    compatibleRuntimes?: RuntimeEnum[];
    createdDate?: string;
    description?: string;
    layerVersionArn?: string;
    licenseInfo?: string;
    version?: number;
}
