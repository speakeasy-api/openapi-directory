import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of role the credit performed, e.g. actor.
 */
export declare enum CreditRoleEnum {
    Actor = "actor",
    Associateproducer = "associateproducer",
    Coactor = "coactor",
    Director = "director",
    Executiveproducer = "executiveproducer",
    Filminglocation = "filminglocation",
    Guest = "guest",
    Narrator = "narrator",
    Other = "other",
    Presenter = "presenter",
    Producer = "producer",
    Productmanager = "productmanager",
    Thememusicby = "thememusicby",
    Voice = "voice",
    Writer = "writer"
}
export declare class Credit extends SpeakeasyBase {
    /**
     * The name of the character.
     */
    character?: string;
    /**
     * The name of the person.
     */
    name: string;
    /**
     * The path to the person
     */
    path: string;
    /**
     * The type of role the credit performed, e.g. actor.
     */
    role: CreditRoleEnum;
}
