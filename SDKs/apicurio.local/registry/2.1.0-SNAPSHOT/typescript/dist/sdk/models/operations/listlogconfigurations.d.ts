import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListLogConfigurationsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    namedLogConfigurations?: shared.NamedLogConfiguration[];
    statusCode: number;
}
