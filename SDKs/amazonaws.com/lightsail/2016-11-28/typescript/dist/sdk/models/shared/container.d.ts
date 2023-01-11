import { SpeakeasyBase } from "../../../internal/utils";
export declare class Container extends SpeakeasyBase {
    command?: string[];
    environment?: Record<string, string>;
    image?: string;
    ports?: Record<string, string>;
}
