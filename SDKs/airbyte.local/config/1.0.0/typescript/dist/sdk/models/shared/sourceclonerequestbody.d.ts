import { SpeakeasyBase } from "../../../internal/utils";
import { SourceCloneConfiguration } from "./sourcecloneconfiguration";
/**
 * The values required to configure the source. The schema for this should have an id of the existing source along with the configuration you want to change in case.
 */
export declare class SourceCloneRequestBody extends SpeakeasyBase {
    sourceCloneId: string;
    sourceConfiguration?: SourceCloneConfiguration;
}
