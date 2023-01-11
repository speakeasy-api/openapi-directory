package openapisdk.models.shared;



public class ActivitiesType {
    public Activity[] activities;
    public ActivitiesType withActivities(Activity[] activities) {
        this.activities = activities;
        return this;
    }
    public String nextToken;
    public ActivitiesType withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}