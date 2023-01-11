import { SpeakeasyBase } from "../../../internal/utils";
export declare class OptionsBlockIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class OptionsBlockIdRequest extends SpeakeasyBase {
    pathParams: OptionsBlockIdPathParams;
}
export declare class OptionsBlockIdResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
