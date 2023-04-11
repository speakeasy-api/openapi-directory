import { SpeakeasyBase } from "../../../internal/utils";
import { ArchitectureEnum } from "./architectureenum";
import { LayerVersionContentOutput } from "./layerversioncontentoutput";
import { RuntimeEnum } from "./runtimeenum";
/**
 * Success
 */
export declare class GetLayerVersionResponse extends SpeakeasyBase {
    compatibleArchitectures?: ArchitectureEnum[];
    compatibleRuntimes?: RuntimeEnum[];
    content?: LayerVersionContentOutput;
    createdDate?: string;
    description?: string;
    layerArn?: string;
    layerVersionArn?: string;
    licenseInfo?: string;
    version?: number;
}
