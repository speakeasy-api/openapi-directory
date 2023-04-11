import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProjectNote extends SpeakeasyBase {
    /**
     * Note Abstract - short/truncated content
     */
    abstract: string;
    /**
     * Date when note was created
     */
    createdDate: string;
    /**
     * Project note id
     */
    id: number;
    /**
     * Date when note was last modified
     */
    modifiedDate: string;
    /**
     * User who wrote the note
     */
    userId: number;
    /**
     * Username of the one who wrote the note
     */
    userName: string;
}
