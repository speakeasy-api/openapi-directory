import { SpeakeasyBase } from "../../../internal/utils";
import { LoggingConfig } from "./loggingconfig";
import { ThirdPartyTypeEnum } from "./thirdpartytypeenum";
import { VersionBumpEnum } from "./versionbumpenum";
export declare class ActivateTypeInput extends SpeakeasyBase {
    autoUpdate?: boolean;
    executionRoleArn?: string;
    /**
     * Contains logging configuration information for an extension.
     */
    loggingConfig?: LoggingConfig;
    majorVersion?: number;
    publicTypeArn?: string;
    publisherId?: string;
    type?: ThirdPartyTypeEnum;
    typeName?: string;
    typeNameAlias?: string;
    versionBump?: VersionBumpEnum;
}
