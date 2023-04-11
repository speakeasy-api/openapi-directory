import { SpeakeasyBase } from "../../../internal/utils";
export declare class BodyCreateFile extends SpeakeasyBase {
    file: string;
    content: Uint8Array;
}
export declare class BodyCreate extends SpeakeasyBase {
    file: BodyCreateFile;
}
