package openapisdk.models.shared;



/**
 * EntityInfo
 * <p>Contains details about the specified entity (user or role).</p> <p>This data type is an element of the <a>EntityDetails</a> object.</p>
**/
public class EntityInfo {
    public String arn;
    public EntityInfo withArn(String arn) {
        this.arn = arn;
        return this;
    }
    public String id;
    public EntityInfo withId(String id) {
        this.id = id;
        return this;
    }
    public String name;
    public EntityInfo withName(String name) {
        this.name = name;
        return this;
    }
    public String path;
    public EntityInfo withPath(String path) {
        this.path = path;
        return this;
    }
    public PolicyOwnerEntityTypeEnum type;
    public EntityInfo withType(PolicyOwnerEntityTypeEnum type) {
        this.type = type;
        return this;
    }
}