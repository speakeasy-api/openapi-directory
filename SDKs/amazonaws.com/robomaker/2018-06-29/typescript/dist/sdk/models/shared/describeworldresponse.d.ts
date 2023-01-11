import { SpeakeasyBase } from "../../../internal/utils";
export declare class DescribeWorldResponse extends SpeakeasyBase {
    arn?: string;
    createdAt?: Date;
    generationJob?: string;
    tags?: Record<string, string>;
    template?: string;
    worldDescriptionBody?: string;
}
