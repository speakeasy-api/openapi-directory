import { SpeakeasyBase } from "../../../internal/utils";
export declare class OptionsAccountIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class OptionsAccountIdRequest extends SpeakeasyBase {
    pathParams: OptionsAccountIdPathParams;
}
export declare class OptionsAccountIdResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
