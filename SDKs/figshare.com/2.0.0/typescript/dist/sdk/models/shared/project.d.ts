import { SpeakeasyBase } from "../../../internal/utils";
export declare class Project extends SpeakeasyBase {
    /**
     * Project id
     */
    id: number;
    /**
     * Date when project was published
     */
    publishedDate: string;
    /**
     * Project title
     */
    title: string;
    /**
     * Api endpoint
     */
    url: string;
}
